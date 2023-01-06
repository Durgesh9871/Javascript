
//  CALL BACKS ------> 
let cart = ["shirt" , "pant" ,"shoes"]

// api.createOrder(cart , function (){
//     api.payment(function (){
//         api.card()
//     }) 
// }) 
   

//  PROMISES ------------> 

// const api = 'https://tan-real-buffalo.cyclic.app/Fish&SeaFood' 


  async function foodData(){
    try{
        let res = await fetch('https://tan-real-buffalo.cyclic.app/Fish&SeaFood')
        let data = await res.json()
        console.log(data)


        // try{
        //     let res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=ba12efd88a7cb987defdf207973de6df&language=en-US&page=1")
        //     let data = await res.json()
             
        //     let real_data = data.results
       
        //      popular(real_data)
        //     console.log(real_data)
        //        }
    }
    catch(err){
         console.log("err")
    }
   


}

const ans = foodData() 
console.log(ans)





//  function call(){
//     console.log("world")
//    payment(function (){
//     console.log('hello')
//   })
   
//  }
//  const work = call()
// //  work()


 

