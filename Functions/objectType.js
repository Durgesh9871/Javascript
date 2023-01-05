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


//  