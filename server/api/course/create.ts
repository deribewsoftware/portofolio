import { createCourse } from "~/lib/course/course";
import { getRefreshTokenByToken } from "~/lib/refreshToken";

export default defineEventHandler(async (event) => {

  try{
    const body= readBody(event);
  const {title,category,description,requriments,whoUseIt,level,price,cover}=await body

  if (!category || !description || !requriments || !whoUseIt || !level || !price || !title){
    return sendError(event,
      createError({
        statusCode:400,
        statusMessage:"invalid course parameter"
      }))
  }

  const courseData={cover,category,description,requriments,whoUseIt,level,price,title}
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

  const newCourse = await createCourse(courseData,token.userId)
  if (!newCourse){
    return sendError(event,
      createError({
        statusCode:400,
        statusMessage:"course cannot be created"
      }))
  }

  return {newCourse}

  }


  catch(err){
    const refreshToken=parseCookies(event)
    console.log("err",err)
    console.log("refresh_token",refreshToken.refresh_token)
    return sendError(event,
      createError({
        statusCode:500,
        statusMessage:"something went wrong"
      }))
  }
})
