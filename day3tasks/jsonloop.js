var a =[{
    "personName" : "ram",
    "last_Name"  : "kumar",
    "age"  :"35",
    "gender" :"male",
    
},

{
    "personName" : "gokula",
    "last_Name"  : "krishnan",
    "age"  :"25",
    "gender" :"male",


},

{
    "personName" : "divya",
    "last_Name"  : "priya",
    "age"  :"28",
    "gender" :"female",

}
];

//for loop

for(var i=0;i<a.length;i++){
    console.log(a[i].personName,",",a[i].age);
    console.log(a[i].personName," ",a[i].last_Name);

}

//using for in

for(var b in a){
    console.log(b,a[b]);
}



