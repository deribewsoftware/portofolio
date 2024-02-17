import useAuth from "./useAuth";

export const UseCourse =() => {

  const CourseList=async ()=>{
    
      try {
        const data = await $fetch("/api/category/course/list")
     return data
    
    
      }
      catch (err){
        return null;
    
      }
    
    }



    const createCourse =(courseData:any)=>{

      return new Promise(async (resolve, reject)=>{
        try {
          const {useAuthUser} =useAuth()
          const user=useAuthUser().value;
         
          
          const data = await $fetch("/api/course/create",{
            method: "POST",
            body:{
             
              title: courseData.title,
              category: courseData.category,
              description:courseData.description,
              requriments:courseData.requriments,
              whoUseIt:courseData.whoUseIt,
              level:courseData.level,
              price:courseData.price,
              cover:courseData.cover

            }
          })
      
      
      resolve(true);
      
        }
        catch (err){
          console.log(err);
          reject(err);
      
        }
      
      })
      
        }
    return {
      CourseList,
      createCourse
    }
}
