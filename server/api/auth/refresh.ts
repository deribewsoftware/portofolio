import { getRefreshTokenByToken } from "~/lib/refreshToken";
import { GenerateTokens, decodeRefreshToken } from "~/lib/tokens/generateTokens";
import { getUserById } from "~/lib/user";

export default defineEventHandler(async (event) => {

  const cookies=getCookie(event, 'refresh_token');
  const refreshToken=cookies

  if (!refreshToken){
    return sendError(event,createError({
      statusCode:401,
      message:"Refresh token is invalid"
    }))
  }
  const rToken=await getRefreshTokenByToken(refreshToken)

  if (!rToken){
    return sendError(event,createError({
      statusCode:401,
      message:"Refresh token is invalid"
    }))
  }
 
  const token=decodeRefreshToken(refreshToken);
  if (!token){
    return sendError(event,createError({
      statusCode:401,
      message:"Refresh token is invalid to decode"
    }))
  }

  try{
    const user= await getUserById(token.sub)

    const {accessToken}=GenerateTokens(user)
    return {
      accessToken
     
    }
  }


  catch (err) {
    return sendError(event,createError({
      statusCode:500,
      message:"something went wrong"
    }))
  }
 
})
