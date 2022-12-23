//  first example of event loop -----------------> 
// 1.  SET TIMEOUT ---

// console.log('start')
// setTimeout(function cb(){
//     console.log('callBack')
// },5000)
// console.log('end')


// 2.EVENT LISTENER--- 

// console.log('start')
// document.getElementById("btn").addEventListener("click" ,function(){
//     console.log('callBack')
// })
// console.log('end')

//  INTERVIEW QUESTIONS -------> 

function x(){
   for(var i=0 ; i<5 ; i++){
    // function y(i){
        setTimeout(()=>{
            console.log(i)
        },i * 1000)
     }

    //  y(i)
    // }

}
x()

//  1. It can be correct with let also , but we correct it with help of closures , problem is same its takes the adress instead of value . 


// closure question --------> 

// function x(){
//     var a = 7 
//     function y(){
//         console.log(a)
//     }
//     return y 
// }

// var z= x() 
// console.log(z)
// z()

// endex x--x--x ---x ---x ------------------------> 

