//b.Convert all the strings to title caps in a string array

//arrow function

var a = (arr)=>{
    
    for(var i=0; i<arr.length;i++){
        
        arr[i]=arr[i].toLowerCase();
        arr[i]=arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        
        
        
    }
    return arr;
}
 console.log(a(["ram","kUMar","raKEsh"]));