import { prisma } from "./prisma.db"


// create review
export const createReview=(reviewData:any)=>{

  return prisma.reviews.create({
    data: reviewData
  })
}

// list of review

