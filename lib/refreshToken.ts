import { prisma } from "./prisma.db"

export const RefreshToken=(refreshToken:any)=>{
  return prisma.refreshToken.create({
    data: refreshToken
  })
}