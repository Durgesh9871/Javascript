//  code run right to left in that case and it declares i in global space 
var x = 100 

function test(){

    var x = i = 10 
}

test()
console.log(x , i)