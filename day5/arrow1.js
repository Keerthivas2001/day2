// a.Print odd numbers in an array

// arrow function


var temp=[];
var a = (arr)=>{
    for(var i=0; i<arr.length;i++){
        if(arr[i]%2!=0){
            temp.push(arr[i]);
            
        }
    }
    return temp;
}
console.log(a([1,2,3,4,5]));