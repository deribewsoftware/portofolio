

export const useLesson =() => {


  const createLesson =(lessonData:any,chapterId:string)=>{

    return new Promise(async (resolve, reject)=>{
      try {
        
       
        
         await $fetch(`/api/lesson/${chapterId}/create`,{
          method: "POST",
          body:{
           
            title: lessonData.title,
            videoUrl: lessonData.videoUrl,
            videoCover: lessonData.videoCover
            
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
    
    createLesson
  }
}
