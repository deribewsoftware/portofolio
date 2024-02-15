import { getUserByEmail } from "~/lib/user"
import bcrypt from "bcrypt"
import { userTransformer } from "~/lib/transformers/user.transformer"
import { GenerateTokens } from "~/lib/tokens/generateTokens"
import { RefreshToken } from "~/lib/refreshToken"
export default defineEventHandler(async (event) => {
  const body =await readBody(event)
  const {email, password}=body
  if (!email || !password) {
    sendError(event,createError({
      statusCode: 400,
      statusMessage:" email or password not empty"
    }))
  }

  //check user presence
  const user =await getUserByEmail(email)

  if (!user) {
    sendError(event,createError({
      statusCode: 400,
      statusMessage:"Invalid email"
    }))
  }


  // Compare password 
  const isMatchpassword = await bcrypt.compare(password,user!.password)
  if (!isMatchpassword) {
    sendError(event,createError({
      statusCode: 400,
      statusMessage:"Invalid password"
    }))

  }



  // generate token
  const {accessToken,refreshToken}=GenerateTokens(user)

  // save refresh token inside database
  await RefreshToken({
    token:refreshToken,
    userId:user!.id
  })



  return {
    accessToken,
    user:user!,

  }
})
