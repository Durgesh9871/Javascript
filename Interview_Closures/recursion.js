

function ways(n){
    if(n==0){
        return 1 
    }
    if(n < 0){
        return 0 
    }
    
    return ways(n-1)+ways(n-2)+ways(n-3)
}

let ans = ways(10)
console.log( "10" , ans)


