import { createCourse } from "~/lib/course/course";

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

  const newCourse = await createCourse(courseData)
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
    return sendError(event,
      createError({
        statusCode:500,
        statusMessage:"something went wrong"
      }))
  }
})
