import { createLesson } from "~/lib/lesson"

export default defineEventHandler(async (event) => {
  const body=readBody(event)
  try{
    const id=event.context.params
    if (!id){
      return sendError(event,
        createError({
          statusCode:400,
          statusMessage:"chapter id not found"
        }))
    }
    const {videoCover,videoUrl ,title}=await body
    if (!title){
      return sendError(event,
        createError({
          statusCode:400,
          statusMessage:"Invalid title"
        }))
    }
    const moduleId=id.chapterId
    const lessonData={
      moduleId,
      videoCover,
      videoUrl
    }
    const  newLesson=await createLesson(lessonData)
    return newLesson
  }

  catch(err){
    return sendError(event,
      createError({
        statusCode:500,
        statusMessage:"something went wrong"
      }))
  }
})
