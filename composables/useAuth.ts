export default()=>{

  const useAuthToken=()=>useState("auth_token");
  const useAuthUser=()=>useState("auth_user");

  const setToken=(newToken:string)=>{
    const authToken=useAuthToken();
    authToken.value=newToken;
  }

  const setUser=(newUser: any)=>{
    const authUser=useAuthUser();
    authUser.value=newUser;
  }



  const login =(loginData:any)=>{

return new Promise(async (resolve, reject)=>{
  try {
    const data = await $fetch("/api/auth/login",{
      method: "POST",
      body:{
        email:loginData.email,
        password:loginData.password
      }
    })
setToken(data.accessToken);
setUser(data.user);
console.log(data);
resolve(true);

  }
  catch (err){
    reject(err);

  }

})

  }
  return {
    login,
    useAuthUser
  }
}
