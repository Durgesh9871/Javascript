//  Interview Outbased question in java script  ---------------------------
// Object :- Object is a collection of properties and that property are the collections of key value pairs 

const a = {} 
const b = {key:"b"} 
const c = {key:"c"} 

a[b] = 123 ; 
a[c] = 456 ; 

console.log(a[b]) 
//  Reason :- when we try to print it both keys have same object - because of this second value overlaps the first value ; 

const shape = {
    radius: 10 , 
    diameter(){
        return this.radius * 2 
    },
    perimeter: ()=>{
     return  2 * this.radius
    }
}

console.log(shape.diameter())
console.log(shape.perimeter())

//  Reason :- for the first this refers to the shape dobject but for the the second function this refers to the window object . So second one gives the ans as nan  ; 


const value = {number :10} 

function name(x = {...value}){
 console.log(x.number *= 2)
}

name()
name()
name(value)
name(value) 



//  Next questions ? --------------------------------

function changeObj(person){
   person.age = 19   
   person = {
    name:'jhon' , 
    age : 5    
   }
   return person 
}

const personObj1 = {
    name:"amisha" , 
    age: 20 
}
const personObj2 = changeObj(personObj1) 


console.log(personObj1)
console.log(personObj2)

//  REASON :- 
//  In first the age is getting changed --------------- 
//  In second when we declare the function it dont have any relation with the variable person thats why its create the object with the same name person and when we print personObj2  its return that person ; 

