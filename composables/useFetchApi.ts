import useAuth from "./useAuth"

export const useUseFetchApi = (url:string,options={}) => {
  const {useAuthToken}=useAuth()
  return $fetch(url,{
    ...options,
    headers: {
      Authorization:`Bearer ${useAuthToken().value}`,
    },
  })
}
