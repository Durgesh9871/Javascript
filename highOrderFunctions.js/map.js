//  ABOUT MAP IS HERE ------------------------------The .map() Method is here --------------------

// Defination:- Map creates a new array by calling a function for each element once  in an array 
// Map does not call the function when the array is empty ; 

const myName = ["durgesh" , "aman" ,"radha" , "sima" , "amisha"] 
 

let ans = myName.map((item)=>{
    return item+"yes"
})

console.log(ans , myName)


// FOR EACH METHOD //
// For each method is used to looping through the array , Its does not return an array 

let arr = ["deep" , "sheep" ,"meep" ,"keep" ,"neem" ,"jeep"] 

 arr.forEach((item)=>{
    console.log(item+"2")
})

// console.log('arr' , arr)