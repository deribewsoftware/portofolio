export const SetRefreshToken=(event:any,token:any)=>{
  setCookie(event.res,"refresh_token",token,{
    httpOnly:true,
    sameSite:true,
  });
  
}