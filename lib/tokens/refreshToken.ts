export const SetRefreshToken=(event:any,token:any)=>{
  setCookie(event,"refresh_token",token,{
    httpOnly:true,
    sameSite:true,
  });
  
}