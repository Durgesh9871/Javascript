// closures example  
//  patter -1 ----------------------------> Normal example --------

// closures defination  :- closures is a function which is bind on bundled together with its outer lexical 
// environmet 

//  2. Explain more about closures :-  Each and every function in js has excess to its outer lecical environment that means it can access the variables and parameters that is present in enviroment of parent , So each and every function has excess to them , Even when the function is executed in other scope is still remember its outer lexical enviroment where it was originally presebt in the code , So this is closure . 



//  here we are calling outer and after that we are calling inner 
function outer(){
var a = 10 
   return  function inner(){
        console.log(a)
    }
   
}

 outer()()

//   pattern -2 --------------------------> 
