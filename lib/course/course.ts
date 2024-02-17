import { prisma } from "../prisma.db"


// create course object
export const createCourse=(courseData:any,userId:string)=>{

  return prisma.course.create({
    data: {...courseData,userId:userId}
  })

}

//get all lists of courses
export const getAllCourses=()=>{
  return prisma.course.findMany();
}

// get course by Id
export const getCourseById=(id:string)=>{
  
  return prisma.course.findFirst({

    where:{id:id}
  })
}

// update course by Id
export const updateCourseById=(id:string,data:any)=>{
  return prisma.course.update({
    where:{id:id},
    data:data
  })
}

// delete course by Id

export const deleteCourseById=(id:string)=>{
  return prisma.course.delete({where:{id:id}})
}