import UrlPattern from 'url-pattern'
import { decodeAccessToken } from '~/lib/tokens/generateTokens'
import { getUserById } from '~/lib/user'

export default defineEventHandler(async (event) => {
  const endPoints=[
    '/api/auth/user'
  ]

  const isHandleledByThisMiddleware =endPoints.some((endPoint) =>{
    const pattern=new UrlPattern(endPoint)
    return pattern.match(event.node?.req?.url ?? '')
  })
  if (!isHandleledByThisMiddleware){
    return
}

const token=event.headers.get('authorization')?.split(' ')[1]
if (!token){
  return
}
const decodeToken=decodeAccessToken(token)

if (!decodeToken){
  return sendError(event,createError({
    statusCode:401,
    statusMessage:"Unauthorized"
  }))
}



try{
  const userId=decodeToken.sub
  const user =await getUserById(userId)
  event.context.auth={user}
}
catch (err){
  return
}


 
})
