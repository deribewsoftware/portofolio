export const userTransformer=(user:any)=>{
  return {
    name:user.name,
    email:user.email,
    avatar:user.avatar
  }
}