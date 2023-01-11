//  ABOUT MAP IS HERE ------------------------------The .map() Method is here --------------------

// Defination:- Map creates a new array by calling a function for each element once  in an array 
// Map does not call the function when the array is empty ; 

const myName = ["durgesh" , "aman" ,"radha" , "sima" , "amisha"] 
 

let ans = myName.map((item)=>{
    return item+"yes"
})

console.log(ans)