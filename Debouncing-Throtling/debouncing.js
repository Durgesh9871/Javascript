
//  Noramal code without debouncing 
let count = 0 
const getData = ()=>{
   console.log('data fetched', count++)
}

//  With debouncing ---------------------------- 

const getDebouncing = ()=>{
    return function(){
        
    }
}

const better = getDebouncing(getData , 300)