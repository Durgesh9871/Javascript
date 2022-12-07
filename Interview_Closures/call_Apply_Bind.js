
//  CALL-------APPLY-------------BIND ----------------

//  ----------------CALL ---- 

let name = {
    firstname :"durgesh" ,
    lastName :"singh" , 
}

let printName = function (frnd , sister , neighbour){
    console.log(`${this.firstname} ${this.lastName} ${frnd} ${sister} ${neighbour}`)
}
printName.call(name,"sita" ,"jaya" ,"sushma")

//----------------------- APPLY ------------ 

let name2 = {
    firstname :"charizard" ,
    lastName :"bunty" , 
}

let printNameApply = function (frnd , sister , neighbour){
    console.log(`${this.firstname} ${this.lastName} ${frnd} ${sister} ${neighbour}`)
}
printNameApply.apply(name2,["sita" ,"jaya" ,"sushma"])


//  -------------BIND --------------> 
// MAKES A COPY OF THAT METHOD AND BIND WITH THE OBJECT AND RETURN A FUNCTION.
// THAT WE CAN USE LATER POINT OF TIME. 

let bindMethod = printName.bind(name,"sita" ,"jaya")
bindMethod("sushma")




//  POLLYFILL FOR BIND METHOD 
// -------------------------------NEW CONCEPT --------------------
//  1. what we will do here is, we passed mybind method to function.prototype, the method which is passed in Function
// .prototype  is access by any method which is written by us . 
// 2. as we can see natural bind method return a function so we return . 
// 3. bind method calls printName, so we call printname inside return 
// 4. we have to access printname so it is possible with the help of this keyword 
// 5. pass arr in arguments and in obj we can acess arr[0] beacuse name is at 0 index which is passed in mybind 
// 6. for other parameters we will take params and slice it so it always gives first value, hence 
//  ITS ARRAY SO INSTEAD OF USING .CALL WE USE .APPLY HERE ------------->----------->----------> 
//  7 . take one bigger array and split params and arr2 in that so everything is passing concisely .. 
//  



Function.prototype.mybind = function (...arr){
    params = arr.slice(1)
    let obj = this 
   return function(...arr2) {
      obj.apply(arr[0] , [...params, ...arr2])
   }
}

let mybindFunction = printName.mybind(name,"sita" ,"jaya","ram")
mybindFunction()



// TOPIC ----------> CURRYING ---------> CURRYING IS ALSO DEPEND ON BIND ----------> 

// currying with the help of bind 

let findSum = function (x,y){
    console.log(x+y)
}

let answer = findSum.bind(this,2)
answer(3)

//CURRYING WITH HELP OF CLOSURES  

 
let currying = function (x){
    return function (y){
        console.log(x+y)
}
    
}

let ans = currying(10)(10)
// ans()  -------------------------------with the bind 


