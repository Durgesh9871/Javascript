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

let obj2 = {
    name:"sima" , 
    age:20 , 
}

Object.seal(obj2) 

obj2.name = "raman"