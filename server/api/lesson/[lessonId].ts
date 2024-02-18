import { getLessonById } from "~/lib/lesson"

export default defineEventHandler(async (event) => {
  try{
    const id=event.context.params
    if (!id){
return sendError(event,
  createError({
    statusCode:400,
    statusMessage:"lesson found"
  }))
    }
const lessonId=id.lessonId
    const lesson=await getLessonById(lessonId.toString())
    return lesson
  }
  catch(err){
return sendError(event,
  createError({
    statusCode:500,
    statusMessage:"something went wrong"
  }))
  }
})
