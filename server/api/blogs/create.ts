import { createBlog } from "~/lib/blog"
import { getRefreshTokenByToken } from "~/lib/refreshToken"

export default defineEventHandler(async (event) => {
const body =readBody(event)
  try{
    const {
      category,
      title,
      cover}=await body

 if (!category||!title){
  
  return sendError(event,
    createError({
      statusCode:400,
      statusMessage:"invalid parameters"
    }))
 }
      
      const refreshToken=parseCookies(event)
  if (!refreshToken){
    return sendError(event,
      createError({
        statusCode:400,
        statusMessage:"Unathorized user credentials"
      }))
  }

  const token= await getRefreshTokenByToken(refreshToken.refresh_token)

  if (!token){
    return sendError(event,
      createError({
        statusCode:400,
        statusMessage:"Unathorized user credentials"
      }))
  }
const userId=token.userId
  const blogData={
    title,
    cover,
    category,
    userId
  }
const newBlog=await createBlog(blogData)

return newBlog
  }


  catch(error){
   
    return sendError(event,createError({
      statusCode:500,
      statusMessage:"something went wrong",
    }))
  }
 
})
