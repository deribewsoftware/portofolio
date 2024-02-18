
import { prisma } from "./prisma.db"


//create blogs
export const createBlog=(blogData:any) => {

  return prisma.blog.create({
    data:blogData
  })
}

// get all list of blogs

export const getAllBlogList=()=>{
  return prisma.blog.findMany()
}


///get blogs by id
export const getBlogById=(blogId:string)=>{
  return prisma.blog.findFirst({
    where: {id:blogId}
  })

}


// Update blog by id

export const updateBlogById=(blogId:string,updatedData:any)=>{
  return prisma.blog.update({
    where: {id:blogId},
    data:updatedData
  })
}


// Delete blog by id

export const deleteBlogById=(blogId:string)=>{
  return prisma.blog.delete({
    where: {id:blogId}});
}