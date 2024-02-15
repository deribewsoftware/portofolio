
import jwt from "jsonwebtoken"
const AccessToken=(user:any)=>{
  const config=useRuntimeConfig()
  return jwt.sign({userId:user.id},config.jwtAccessToken,{
    expiresIn:"10m"
  })


}

const RefreshToken=(user:any)=>{
  const config=useRuntimeConfig()
  return jwt.sign({userId:user.id},config.jwtRefreshToken,{
    expiresIn:"4h"
  })
  
}


export const GenerateTokens=(user:any)=>{
  const accessToken=AccessToken(user);
  const refreshToken=RefreshToken(user);
  return {
    accessToken:accessToken,
    refreshToken:refreshToken
  }
}