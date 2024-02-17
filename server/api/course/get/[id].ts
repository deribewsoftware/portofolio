import { getCourseById } from "~/lib/course/course"

export default defineEventHandler(async (event) => {
  const id = event.context.params
  if (!id) {
    return sendError(event, createError({
      statusCode:400,
      statusMessage:"id cannot found"
    }))
  }

  try{

    const course=await getCourseById(id.id.toString())

    if (!course) {
      return sendError(event, createError({
        statusCode:400,
        statusMessage:"course cannot found"
      }))
    }
   
    return {...course}
  }


  catch(err) {
    console.log(err)
   
    return sendError(event, createError({
      statusCode:500,
      statusMessage:"something went wrong"
    }))
  }
 
})
