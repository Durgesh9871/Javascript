
//  Its an example of rest operator 
//  array with 
function rest(a,b,c,...other){
    // console.log(...other)
    return (a+b+c)
}

const ans = rest(1,2,3,4,5,6)
console.log(ans)

//  with objects 
const students = {
    names:"avni" , 
    age:"12" ,
    gender:"girl",
}

const {names ,...resting} = students

console.log('students' , names )



//  EXAMPLE OF SPREAD OPERATOR -----------------------------------
//  array with ---------------------------

let name = [1,2,3,5,8,6]

function spread(name){
  
    return name
}

const sum  = spread(...name)
console.log("sum" , sum)

//  object with ------------we use old obj of studnets -------------------------------
// Interview question  how we can update it in spread operator  ----------------------------------
 
var newStudents = {
    ...students,
    age:19 , 
}
console.log('newStudents' , newStudents)



const last = "name" 

const print= function(){
    const first = "hello"
    console.log(first)
    console.log(last)
}

print()