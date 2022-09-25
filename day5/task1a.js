// Do the below programs in anonymous function & IIFE
//a. Print odd numbers in an array
// anonymous function
var temp=[];
var a =function(arr){
    for(var i=0; i<arr.length;i++){
        if(arr[i]%2!=0){
            temp.push(arr[i]);
            
        }
    }
    return temp;
}
console.log(a([1,2,3,4,5]));


// IIFE function
var temp=[];
(function x (arr){
    for(var i=0; i<arr.length;i++){
        if(arr[i]%2!=0){
            temp.push(arr[i]);
         
        }
          
    }
     console.log(temp);
})
([1,2,3,4,5]);







