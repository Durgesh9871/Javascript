// REDUCE --------------------------------FUNCTION  ; 
//With the help of reducer we can perform some time of calculations   

let arr = [1,2,3,4,5] 

let sum = arr.reduce((num,item)=>{
    return num+item 
})
console.log("sum" , sum)