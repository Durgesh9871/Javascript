// ABOUT FILTER -------------------------------------------

// Filter is an higher order function which returns an array which is filled with those elements that passed the test 

let number = [1,2,3,4,5,6,7,8,9] 


let ans = number.filter((item)=>{
    return item > 5 
})

console.log(ans)