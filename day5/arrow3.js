// c.Sum of all numbers in an array

//arrow function

var sum=0;
var a= (arr)=>{
    
    for(var i=0; i<arr.length;i++){
        
    sum+=arr[i];
        
        
        
    }
    return sum;
   
}
console.log(a([4, 8, 7, 13, 12]));