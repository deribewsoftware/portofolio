import { getAllCourses } from "~/lib/course/course"

export default defineEventHandler(async (event) => {
  try{

const courses=await getAllCourses();

return courses


  }




  catch(err){
    return sendError(event,createError({
      statusCode:500,
      statusMessage:"something went wrong"
    }))
  }
})
