import { prisma } from "./prisma.db"


// create lessson
export const createLesson=(lessonData:any)=>{

return prisma.lesson.create({
  data:lessonData
})
}

//get lesson by id
export const getLessonById=(id:string)=>{
return prisma.lesson.findFirst({
  where:{id:id},
  include:{
    module:{
      include:{
        course:true
      }
    }
  }
})
}