module.exports = function transform(arr) {
    let newArr = [];
if(Array.isArray(arr)){
    if(arr.length==0){
        return arr;
    }else{
        for(let i=0; i<arr.length; i++){
            if(arr[i]=='--discard-next'){
                if(i==arr.length-1){
                    ;
                    }else i++;
            }else if(arr[i]==='--discard-prev'){
                if(i==0){
                   ;
                } else newArr.pop(); 
            }else   if(arr[i]==='--double-next'){
                if(i==arr.length-1){
                   ;
                } else  newArr.push(arr[i+1]); 
            }  else if(arr[i]==='--double-prev'){
                if(i==0){
                    ;
                } else  newArr.push(arr[i-1]); 
            }  else newArr.push(arr[i])       
        }
        return newArr;
    }
    
}else throw new Error();
   

};
