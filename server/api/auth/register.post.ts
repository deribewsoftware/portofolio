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
return { user: userTransformer(user)}
})