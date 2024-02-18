import { prisma } from "./prisma.db"


// create lessson
export const createLesson=(lessonData:any)=>{

return prisma.lesson.create({
  data:lessonData
})
}