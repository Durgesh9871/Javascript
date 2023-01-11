//  Object freeze code is here ---------------------
let obj = {
    name:"durgesh" , 
    age:19, 
}
Object.freeze(obj) 

obj.class = 7 ; 
console.log(obj)