
//  Its an example of rest operator 
function rest(a,b,c,...other){
    console.log(other)
    return (a+b+c)
}

const ans = rest(1,2,3,4,5,6)
console.log(ans)
