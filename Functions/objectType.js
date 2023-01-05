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

//  3.function constructor ----------for reusing our obj again and again we can use this -------In terms of scalibility its very good


