// d.Return all the prime numbers in an array

//anonymous function
var a= function(arr){
    
  var temp=[];
      arr.forEach ((num) =>{
          let factor=0;
          
          for(var i=0; i<=num;i++){
          
          if((num%i)===0){
              factor++
          }
      }
      if(factor===2){
          temp.push(num);
      }
      
  })
  return temp;
  }
  console.log(a([4,17,12,5,7]));


//   IIFE condition

(function(arr){
    
  var temp=[];
      arr.forEach ((num) =>{
          let factor=0;
          
          for(var i=0; i<=num;i++){
          
          if((num%i)===0){
              factor++
          }
      }
      if(factor===2){
          temp.push(num);
      }
      
  })
  console.log(temp);
  })
  ([4,17,12,5,7]);