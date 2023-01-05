

//  Objevct copy -------------------------
// In Object copy makes by refrence --------------

let obj = {
    name:"shivani"
}

let copy = obj 
copy.name = "aman"

console.log(obj)

//  Shallow copy ------------------ 
// In this its does not make the copy of memory allocation, Its makes the copy of value 
let obj1 = {
    name:"amisha"
}
let user = Object.assign({} , obj1) 
user.name ="durgesh"  

console.log(user)
console.log('obj1' , obj1)