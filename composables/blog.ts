

export const UseBlog =() => {


    const createBlog =(blogData:any)=>{

      return new Promise(async (resolve, reject)=>{
        try {
          
         
          
           await $fetch("/api/blogs/create",{
            method: "POST",
            body:{
             
              title: blogData.title,
              category: blogData.category,
              cover:blogData.cover,
      }})
      
      
      resolve(true);
      
        }
        catch (err){
          console.log(err);
          reject(err);
      
        }
      
      })
      
        }
    return {
      
      createBlog
    }
}
