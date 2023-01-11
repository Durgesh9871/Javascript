//  Object freeze code is here ---------------------
let obj = {
    name:"durgesh" , 
    age:19, 
}
Object.freeze(obj) 

obj.name ="sima" ; 
console.log(obj)