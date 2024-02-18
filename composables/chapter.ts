

export const useChapter =() => {


  const createChapter =(chapterData:any,courseId:string)=>{

    return new Promise(async (resolve, reject)=>{
      try {
        
       
        
         await $fetch(`/api/chapter/${courseId}/create`,{
          method: "POST",
          body:{
           
            title: chapterData.title,
            
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
    
    createChapter
  }
}
