import { getAllChapters } from "~/lib/chapter"

export default defineEventHandler(async (event) => {
  try{

    const chapters=await getAllChapters();
    return chapters
  }


  catch(error){
return sendError(event,
  createError({
    statusCode:500,
    statusMessage:"something went wrong"
  }))
  }
})
