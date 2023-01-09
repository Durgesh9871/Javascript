
//  Noramal code without debouncing 
let count = 0 
const getData = ()=>{
   console.log('data fetched', count++)
}

//  With debouncing ---------------------------- 

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