// Types of object 
// 1. Object literal -----this refer to the user ----------

let user1 = {
    name:"radha" ,
    degree:"btech",
    rollNo:"2" ,
    knowledge:function (){
       console.log(this.name+" "+this.degree)
    }
}

user1.knowledge()


//  2.object constructor -------------------- Its used very rarely ----------

const obj = new Object() 
obj.name="jonny" ,
obj.class ="12th" ,
obj.power = "100" 

console.log(obj)

//  3.Function constructor ----------for reusing our obj again and again we can use this -------In terms of scalibility its very good 
// 2 In function constructor we create a blue print here -----------------------

function User(name , age , power ){
    this.name= name , 
    this.age = age , 
    this.power = power 
}

let user = new User("sima" , 22 , 32)
console.log(user)
//  I can construct as many objects as I want with these blue print ------------------------



//  4. Factory Function --------------------------

//  if we dont want to use new Keyword we can simply create a function and return an object this is known as factory function ---------------------

function Person(name , age){
    return {
        name: name ,
        age :age 
    }
}

const person1 = Person("durgesh " , 19)
console.log(person1)


// #- Classes to create OBJECT ----------------- CLASS CONSTRUCTOR ------------------
// 5. we can use clases to create object ------------------------------------

class People{
   constructor(name , age){
      this.name = name ;
      this.age = age  ; 
   } 

   printWelcome(){
    console.log("Welcome" +" "+ this.name)
   }
}

let amisha = new People("amisha" , 19)
console.log(amisha)
amisha.printWelcome()
