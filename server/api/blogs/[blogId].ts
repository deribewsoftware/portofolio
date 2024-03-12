import { getBlogById } from "~/lib/blog"

export default defineEventHandler(async(event)=>{
  const blogId=getRouterParam(event, 'blogId')
  try{
    if(!blogId){
      return sendError(event,
        createError({
          statusCode:500,
          statusMessage:"something went wrong"
        })) 
    }
    const blog=await getBlogById(blogId)
    return blog;
  }
  catch(err){
    return sendError(event,
      createError({
        statusCode:500,
        statusMessage:"something went wrong"
      }))
  }
  })