// ABOUT FILTER -------------------------------------------

// Filter is an higher order function which returns an array which is filled with those elements that passed the test or passed the criteria from which we want to filter it 

let number = [1,2,3,4,5,6,7,8,9] 


let ans = number.filter((item)=>{
    return (item > 5 )
})

console.log(ans)



//  forEach does not support an chaning operartion because it does nor return anything like arr.forEach((el)=>{
    // }) dot and next task, its doest not support this , 
    // 
