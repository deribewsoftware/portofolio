import { createChapter } from "~/lib/chapter";

export default defineEventHandler(async (event) => {
  const body=readBody(event)
  const id =event.context.params

  try{
    if (!id){
      return sendError(event,createError({
        statusCode:400,
        statusMessage:"course is not found",
      }));
    }
    const courseId=id.courseId
    const {title}=await body
    if (!title) {
      return sendError(event,createError({
        statusCode:400,
        statusMessage:"title is empty",
      }));

    }

    const chapterData={
      title,
      courseId
    }
    const newChapter=await createChapter(chapterData)
    return newChapter;
  }
  catch(err){
    return sendError(event,createError({
      statusCode:500,
      statusMessage:"something went wrong"
    }));
  }
})
