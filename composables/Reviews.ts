export const useReviews = () => {

  const createReview =(reviewData:any,courseId:string)=>{

    return new Promise(async (resolve, reject)=>{
      try {
        
       
        
        const data = await $fetch(`/api/reviews/${courseId}/create`,{
          method: "POST",
          body:{
           
            comment: reviewData.comment,
            rating: reviewData.rating,
           

          }
        })
    
    
    resolve(true);
    
      }
      catch (err){
        
        reject(err);
    
      }
    
    })
    
      }
  return {
    createReview
  }
}
