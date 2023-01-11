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
obj2.class = 7 ; 

console.log(obj2)  

//  So in obj.seal() new property cannot be added and old property cannot be removed  ; 


//  SET IS HERE -----------------------------------

