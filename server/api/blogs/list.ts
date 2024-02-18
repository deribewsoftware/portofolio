import { getAllBlogList } from "~/lib/blog"

export default defineEventHandler(async (event) => {
  try{
const blogs=await getAllBlogList();
return blogs;

  }
  catch(err){
    return sendError(event,
      createError({
        statusCode:500,
        statusMessage:"something went wrong"
      }))
  }
})
