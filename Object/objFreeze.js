// OBJECT FREEZE ---------------------
//  Object freeze code is here --------------------- 
//  with the help of obj.freeze() we can freezw the obj 
let obj = {
    name:"durgesh" , 
    age:19, 
}

Object.freeze(obj) 

obj.class = 7 ; 
console.log(obj)


//  OBJECT SEAL STARTS HERE ----------------------------------

