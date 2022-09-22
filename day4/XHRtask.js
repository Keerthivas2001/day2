var request=new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all");

request.send();

request.onload=function(){
    
    
    var res=JSON.parse(request.response);
    console.log(res);
   for(var i=0; i<res.length; i++){
    
    console.log("country name :",res[i].name," ", "country region :", res[i].region," ", "country sub-region :",res[i].subregion, "country population :",res[i].population);
   }
  
};