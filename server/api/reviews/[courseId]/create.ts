import { getRefreshTokenByToken } from "~/lib/refreshToken";
import { createReview } from "~/lib/reviews";

export default defineEventHandler(async (event) => {
  try{
const body=readBody(event);

const { rating,comment}=await body
const id =event.context.params
if (!id){
  sendError(event,
    createError({
      statusCode:400,
      statusMessage:"courseId not  found",
    }))
}

  const refreshToken=parseCookies(event)
  if (!refreshToken){
    return sendError(event,
      createError({
        statusCode:400,
        statusMessage:"Unathorized user credentials"
      }))
  }

  const token= await getRefreshTokenByToken(refreshToken.refresh_token)

  if (!token){
    return sendError(event,
      createError({
        statusCode:400,
        statusMessage:"Unathorized user credentials"
      }))
  }

  const userId=token.userId
  const courseId=id?.courseId
const  reviewsData={rating,comment,userId ,courseId}
const newsReview=await createReview(reviewsData)

return  newsReview
  }
catch(err) {
  console.log(err)
  return sendError(event,createError({
    statusCode:500,
    statusMessage:"somethin went wrong",
  }))
}
    })