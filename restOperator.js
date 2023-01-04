
//  Its an example of rest operator 
function rest(...other){
    console.log(...other)
    // return (a+b+c)
}

const ans = rest(1,2,3,4,5,6)
console.log(ans)




//  EXAMPLE OF SPREAD OPERATOR -----------------------------------

let name = [1,2,3,5,8,6]

function spread(name){
  
    return name
}

const sum  = spread(...name)
console.log("sum" , sum)