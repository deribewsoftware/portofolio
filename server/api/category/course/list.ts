import { getCourseCategories } from "~/lib/category/course.category"

export default defineEventHandler(async (event) => {
  try{

    const courseCategories=await getCourseCategories();
    return {...courseCategories}
  }


  catch(error){}
})
