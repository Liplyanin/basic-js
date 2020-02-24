module.exports = class DepthCalculator {
    calculateDepth( arr) { 
        let depth = 1;
        if(Array.isArray(arr)&&arr.length===0){
   
                return depth;
            }else if(Array.isArray(arr)){
  
                arr.forEach(element => {
                    if(Array.isArray(element)){
                        
                        return depth +=this.calculateDepth(element)
                    }
                });
  
            } else return 0;       
     return depth;
    }
  };
