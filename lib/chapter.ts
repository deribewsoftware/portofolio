import { prisma } from "./prisma.db"

export const createChapter=(chapterData:any)=>{
  return prisma.module.create({
    data:chapterData

  })
}

//get all list of chapters

export const getAllChapters =()=>prisma.module.findMany();