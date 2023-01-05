

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
//  Destructuring is also a way of doing this -------------
// let user = {...obj1}
user.name ="durgesh"  

console.log(user)
console.log('obj1' , obj1)



//  Deep copy ----------------------
//  Make a copy of value 
let obj2 = {
    name:"amisha"  ,
    data:{
     role:"frontend"
    },
    work:function (){
  return true 
    }
}
let users = JSON.parse(JSON.stringify(obj2))
//  Destructuring is also a way of doing this -------------
// let user = {...obj1}
users.name ="durgesh"  

console.log(users)
console.log('obj1' , obj2)