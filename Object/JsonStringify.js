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
//   Defination :-   When receiving data from a web server, the data is always a string. Parse the data with JSON.parse() , and the data becomes a JavaScript object. 


const json = '{"result":"passed", "count":42}'
const object = JSON.parse(json);

console.log(object);