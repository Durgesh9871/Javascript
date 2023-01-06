
//  CALL BACKS ------> 
let cart = ["shirt" , "pant" ,"shoes"]

// api.createOrder(cart , function (){
//     api.payment(function (){
//         api.card()
//     }) 
// }) 
   

//  PROMISES ------------> 

// const api = 'https://tan-real-buffalo.cyclic.app/Fish&SeaFood' 


 const call = async ()=>{
    try{
        let res = await fetch('https://tan-real-buffalo.cyclic.app/Fish&SeaFood')
        let data = res.json()
        console.log(data)
    }
    catch(err){
         console.log("err")
    }
   


}

call()



//  function call(){
//     console.log("world")
//    payment(function (){
//     console.log('hello')
//   })
   
//  }
//  const work = call()
// //  work()


 

