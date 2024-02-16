import { createCoursecategory } from "~/lib/category/course.category"

export default defineEventHandler(async (event) => {
  try{
    const body=readBody(event)

  const {name, cover}= await body

  if (!name){
    return sendError(event,
      createError({
        statusCode:400,
        statusMessage:"Invalid name"
      }))}
      

      const courseCategoryData={name,cover}

      const newcategory=await createCoursecategory(courseCategoryData)
      
      if (!newcategory){
        return sendError(event,
          createError({
            statusCode:400,
            statusMessage:"course cannot be created"
          }))
      }

      return { newcategory}
  }

 catch(error){

 }
})
