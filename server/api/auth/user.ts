import { getRefreshTokenByToken } from "~/lib/refreshToken";
import { userTransformer } from "~/lib/transformers/user.transformer"
import { getUserById } from "~/lib/user";


export default defineEventHandler(async (event) => {
 
  const cookies = parseCookies(event).refresh_token


 try{
  const token=await getRefreshTokenByToken(cookies)
  if (!token){
    return sendError(event,
      createError({
        statusCode:400,
        statusMessage:"Unathorized refresh token"
      }))

  }


const user=await getUserById(token.userId)

if (!user){

  return sendError(event,
    createError({
      statusCode:400,
      statusMessage:"Unathorized refresh token"
    }))

}
  return {
    user:user,
    
   
}
 }

 catch(err) {}

    

})