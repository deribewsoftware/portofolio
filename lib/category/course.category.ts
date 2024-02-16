import { prisma } from "../prisma.db"


//crate course category
export const createCoursecategory=(data:any)=>{
  return prisma.courseCategory.create({
    data: data
  })
}


// update coursecategory
export const UpdateCourseCategory=(id:string,data:any)=>{
  return prisma.courseCategory.update({
    where:{id:id},
    data:{
      name:data.name,
      cover:data.cover
    }
  })
}


//delete Courses Category
export const DeleteCourseCategory=(id:string)=>{
  return prisma.courseCategory.delete({
    where:{id:id},
  })
}



// get all Courses Categories

export const getCourseCategories=()=>{
  return prisma.courseCategory.findMany()
}