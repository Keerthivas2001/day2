// c.Sum of all numbers in an array

//anonymous function

var sum=0;
var a= function (arr){
    
    for(var i=0; i<arr.length;i++){
        
    sum+=arr[i];
        
        
        
    }
    return sum;
   
}
console.log(a([4, 8, 7, 13, 12]));


// IIFE function

var sum=0;
 (function (arr){
    
    for(var i=0; i<arr.length;i++){
        
    sum+=arr[i];
        
        
        
    }
 console.log(sum);
   
})
([4, 8, 7, 13, 12]);
