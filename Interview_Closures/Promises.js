
//  CALL BACKS ------> 
let cart = ["shirt" , "pant" ,"shoes"]

// api.createOrder(cart , function (){
//     api.payment(function (){
//         api.card()
//     }) 
// }) 
   

//  PROMISES ------------> 

// const api = 'https://api.publicapis.org/entries' 

 function call(){
    console.log('world')
    return function(){
        console.log('hello')
    }
 }
 call()


 

