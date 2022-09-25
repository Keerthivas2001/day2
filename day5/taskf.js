//f.Return median of two sorted arrays of the same size.

// anonymous function
var m =function(n1,n2){
    
    var arr=[...n1,...n2].sort();
    if(arr.length%2==0){
        var m1=arr[arr.length/2];
        var m2=arr[arr.length/2-1];
        return (m1+m2)/2;
    }
    else {
        return arr[Math.floor(arr.length/2)];
    }
}

console.log(m([12,30,45],[20,44,67]));


// IIFE function


(function(n1,n2){
    
    var arr=[...n1,...n2].sort();
    if(arr.length%2==0){
        var m1=arr[arr.length/2];
        var m2=arr[arr.length/2-1];
         console.log((m1+m2)/2);
    }
    else {
         console.log(arr[Math.floor(arr.length/2)]);
    }
})
([12,30,45],[20,44,67]);
