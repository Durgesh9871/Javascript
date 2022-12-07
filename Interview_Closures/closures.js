// closures example  
//  patter -1 ----------------------------> Normal example --------

// closures defination  :- closures is a function which is bind on bundled together with its outer lexical 
// environmet 

//  2. Explain more about closures :-  Each and every function in js has excess to its outer lecical environment that means it can access the variables and parameters that is present in enviroment of parent. 

// 3. Even when the function is executed in other scope is still remember its outer lexical enviroment where it was originally present in the code , So this is closure . 



//  here we are calling outer and after that we are calling inner 
function outer(){
var a = 10 
   return  function inner(){
        console.log(a)
    }
   
}

 outer()()

//   pattern -2 --------------------------> we are using let which is a block scope, but still it can excess outer lexical environment 

function Outer(){
    function inner(){
        console.log(a)
    }
    let a = 10 
return inner 
}

Outer()()


//  pattern -3 -------------------------------> here its working same, inner fubction forms a closure with outer environment and b also a part of outer lexical environment 

function Oouter(b){
var a = 10 
    function inner(){
        console.log(a ,b)
    }
    return inner 
}

let ans = Oouter("hello")
ans()


//Q -what happen if outer function is nested inside a function?  
// topic --- relation of chain, scope and closure 
// Ans - So again it will form a closure with environment of that function. 

function Outest(){
    var c = 20 
    function Outer(b){
        var a = 10 
            function inner(){
                console.log(a ,b , c)
            }
            return inner 
        }
       return Outer
    }
    let ans1 = Outest()("world")
 ans1()


//  Topic -- global conflicting variable 
// Inside global scope we have same variable a but is work as same . if a variable inside outer is not present than its offcourse forms a closure with outer lexical environment and try to find the value of a in global scope 
//  If a both side a is not present than it shows refrence error ------>   a is not defined 


function Ooutest(){
    var c = 20 
    function Outer(b){
        let a = 10 
            function inner(){
                console.log(a ,b , c)
            }
            return inner 
        }
       return Outer
    }
 let a = 100 
 let ans2 = Ooutest()("world")
 ans2()


//  After all this explain some advantages of closures 
// 1 . Its helps in data hiding and encapsulation  ------  explain ??  
// 2. function currying 


//  DATA HIDIND OR DATA PRIVACY :-  supposes if we have a variable and we want to have some data privacy over it like other functions and other peices of code cannot have access to that particular data , So that is know as data hiding or privacy 
// WE can encapsulate that data by other functions or other part of programs cannot access it 

let count = 0 

function increaseCount(){
    count++ 
}
 
// So, the problem with this code is the count variable can acces by anyone , So I have to make it a kind of private variable so no one can access it , and the count is only increases by this function , So here comes the role of data hiding in the picture .we can use closure for it  for example 

function hideData (){
    var count = 0 

   return function increaseCount(){
        count++
        console.log("Data privacy topic start from here",count)
    }

}
let counter1 = hideData()
counter1()

//  So the data becomes private 
let counter2 = hideData()
counter2() ; counter2() ; counter2()

// Here, we declare one more variable so the counter2 is not related with counter1 , its totally independent . 

// ###  So its very bad in scalibility !!  So what we can do is we can use constructor function ! 

//  So here comes the role of function Constructor 
// So this is a constructor function so we have to use new Keyword 

function Counter(){
    var count = 0 
    this.incremnetCount = function (){
        count++
        console.log("constructor" , count)
    }
    this.decrementCount = function (){
        count-- 
        console.log("constructor" ,count)
    }
}

let counterFinal = new Counter() ;
counterFinal.incremnetCount()
counterFinal.decrementCount()
counterFinal.incremnetCount()


//  After all this here comes the disadvantages of closures 

// 1.  There would be over consumption of memory in closures because every time is closure is formed, So its consumed a lot of memory and sometimes at those over close variables are not garbaged collected , So its accumulating a lot of memory when lot of closures are created 
// 2. If its not handled properly , then its also cause to memory leakage , and it can also freaze the browser 


// Qustion ? what is a garbage collector and what does it do ?? 

// ans -  Garbage collector is the program in the browser or in the js engine wich kind of frees the un utilized memory .
// 2. Js is basically a high level programming languange in these garbage collector is in js engine and when ever there is some un used variables in the memory, its takes it out from the memory basically it frees the memory whenever its find there is no longer need of it 


//  Question ?? How closures and garbage collector related to each other   
//  Topic - relation of garbage collector closures and memory leaks ---------------------->


function garbage(){
    let x = 10 
   return  function collect(){
        // console.log(a)
    }
}

garbage()()

//  So here what is happening inside function is forming a closure with a outer variable x . And we can see that this variable is not in used so garbage collector collects it and frees the memory . 

function Garbage(){
    let x = 300 
   return  function collect(){
        console.log("x" , x)
    }
}

let sum = Garbage()
sum()


//  So here what is happening , these variable is used in inner function and garbage collector does not collect it , So it not free the memory . 