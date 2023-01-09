
//  Noramal code without debouncing 
let count = 0 
const getData = ()=>{
   console.log('data fetched', count++)
}

//  With debouncing ---------------------------- 
// const getDebouncing = (data , delay)=>{
//     let timer ; 
//     return function(){
//         clearTimeout(timer) ; 
//       timer =  setTimeout(()=>{
//            data()
//         },delay)
//     }
// }


//  we can implement debouncing like this also but the chance is the environment and lexical scope is not 
// correct and might have chance same function is not called with same arguments------------- 


const getDebouncing = (data , delay)=>{
    let timer ; 
    return function(){
        clearTimeout(timer) ; 
      timer =  setTimeout(()=>{
           data()
        },delay)
    }
}


const better = getDebouncing(getData , 1000)