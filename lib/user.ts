import { prisma } from "./prisma.db"
import bcrypt from "bcrypt"

export const createUser = (userData:any) =>{
  const data={
    ...userData,
    password:bcrypt.hashSync(userData.password,10)
  }
  return  prisma.user.create({
    data: data
  })

}

//get user by email

export const getUserByEmail=(email:string)=>{

  return prisma.user.findFirst({
    where: {email:email}
  })

}