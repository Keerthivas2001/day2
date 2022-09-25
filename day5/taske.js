//e.Return all the palindromes in an array

// anonymous function

var temp = [];
var a = function(arr){
    for(var i=0; i<arr.length; i++){
        var sample = arr[i];
        var sample1 = arr[i].split("").reverse().join("");
        
        if(sample == sample1){
           temp.push(sample);
        }	      }
return temp;
}
console.log(a(["100","202","madam","ram"]));




// IIFE function


var temp = [];
	 (function(arr){
	      for(var i=0; i<arr.length; i++){
	          var sample = arr[i];
	          var sample1 = arr[i].split("").reverse().join("");
	          
	          if(sample == sample1){
	             temp.push(sample);
	          }	      }
     console.log(temp);
	  })
	(["100","202","madam","ram"]);