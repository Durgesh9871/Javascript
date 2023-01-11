
// GENERATOR FUNCTION -------------------------------   

//  Generator symbol is start ------------------ **** 


function* generate(){
 let i = 0 

 yield 1 
 yield 2
 
//   More optimised code can be --using a while loop -- 
   
// while(true){
//     yield i++ 
// }

}

const ans = generate()
console.log(ans.next()) 
//  We are getting a object by printing it ans.next()

//  Defination :- In java Script a generator is a function  which returns an object on which we can call.next()

