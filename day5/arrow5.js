//e.Return all the palindromes in an array

// arrow function

var temp = [];
var a = (arr)=>{
    for(var i=0; i<arr.length; i++){
        var sample = arr[i];
        var sample1 = arr[i].split("").reverse().join("");
        
        if(sample == sample1){
           temp.push(sample);
        }	      }
return temp;
}
console.log(a(["100","202","madam","ram"]));
