import { RefreshToken } from "~/lib/refreshToken";
import { GenerateTokens } from "~/lib/tokens/generateTokens";
import { SetRefreshToken } from "~/lib/tokens/refreshToken";
import { userTransformer } from "~/lib/transformers/user.transformer";
import { createUser } from "~/lib/user";

export default defineEventHandler(async(event)=>{
const body= await  readBody(event);

const {name,email,password,repeatPassword}=body
if(!email || !password || !repeatPassword || !name){
  sendError(event,createError(
    {statusCode:400,
      statusMessage:"the form  params are invalid"
  }))
}
if (password!==repeatPassword){
  sendError(event,createError(
    {statusCode:400,
      statusMessage:"Password does not match"
  }))
}







const userData={
  name,
  email,
  password,
}

const user = await createUser(userData)
// generate token
const {accessToken,refreshToken}=GenerateTokens(user)

// save refresh token inside database
await RefreshToken({
  token:refreshToken,
  userId:user!.id
})

// save token in Cookie
SetRefreshToken(event,refreshToken)


return {
  accessToken,
  user:user!,

}
})