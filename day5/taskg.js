//g.Remove duplicates from an array

// anonymous function

var temp=[];
var a= function (arr) {
for(var i=0; i<arr.length; i++){
    var count=0;
    for(var j=i; j<arr.length;j++){
         if(arr[i]==arr[j]){
                 count++; 
         }
    } 
    if(count<=1){ 
        temp.push(arr[i]);
    }  
}
return temp
}
console.log(a([10,35,6,20,10,6]));


// IIFE function

var temp=[];
(function (arr) {
for(var i=0; i<arr.length; i++){
    var count=0;
    for(var j=i; j<arr.length;j++){
         if(arr[i]==arr[j]){
         count++; 
  }
 } 
    if(count<=1){
    temp.push(arr[i]);
  }  
}
 console.log(temp);
})
([10,35,6,20,10,6]);