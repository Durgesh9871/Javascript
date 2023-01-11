//  Json stringfify logic is here --------------------------- 
// The JSON.stringify()  method converts a JavaScript value to a JSON string 
//  Except Number it doest not convert number into JSON format ; 


let obj = 
JSON.stringify( {
    x:1 , 
    y:2 , 
    z:3 , 
})
// console.log(JSON.stringify({ x: 5, y: 6 }));

console.log(obj)


//  JSON PARSE IS HERE --------------------------------  
  
let parse = JSON.parse({
    "x":1 ,
    "y":2 , 
    "z":3 , 
})

console.log(parse)