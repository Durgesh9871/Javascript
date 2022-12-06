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



