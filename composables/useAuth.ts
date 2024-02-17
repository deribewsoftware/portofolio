import { useUseFetchApi } from "./useFetchApi";

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
localStorage.setItem("user",JSON.stringify(data.user));
console.log("login data",data);
resolve(true);

  }
  catch (err){
    console.log("login err",err);
    reject(err);

  }

})

  }


  const refreshToken =()=>{
    return new Promise(async (resolve, reject)=>{
      try{
        const data= await $fetch("/api/auth/refresh")
        setToken(data.accessToken);
        
        resolve(true);
      }
      catch (err){
        reject(err);
      }
    })
  }



  const getUser=()=>{
    return new Promise(async (resolve, reject)=>{
      try{
     const data= await $fetch("/api/auth/user")
        setUser(data);
        
        resolve(true);
      }
      catch (err){
        reject(err);
      }
    })
  }





  const initAuth =()=>{
    return new Promise(async (resolve, reject)=>{
      try{
        await refreshToken();
        await getUser();
        resolve(true);
      }
      catch (err){
        reject(err);
      }
    })
  }



  return {
    login,
    useAuthUser,
    initAuth,
    useAuthToken
  }
}
