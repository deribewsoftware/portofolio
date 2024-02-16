import { prisma } from "./prisma.db"

export const RefreshToken=(refreshToken:any)=>{
  return prisma.refreshToken.create({
    data: refreshToken
  })
}

export const getRefreshTokenByToken=(token:string)=>{
  return prisma.refreshToken.findUnique({
    where: { token: token}
  })
}