
// // let str = ["I" , "speak" , "goat" ,"Latin" , "ice" ]

// // let alpha = "aeiou"  
// // let some = alpha.substring(1)
// // //  some)


// // let word = "ma" 
// // let index = "a" 

// // for(var i=0 ; i<str.length ; i++){

// //     for(var j=0 ; j<str[i].length ; j++ ){

// //         if(str[i][0] == "a" || str[i][0] == "e" || str[i][0] == "i" || str[i][0] == "o" || str[i][0] == "u"){
// //            str[i] += word + index 
// //            index += "a"
// //            break 
// //         }
// //         else if(str[i][0] == "A" || str[i][0] == "E" || str[i][0] == "I" || str[i][0] == "O" || str[i][0] == "U"){
// //             str[i] += word + index 
// //             index += "a"
// //             break 
// //          }
// //          else{
// //             let first = str[i][0]
// //             let some = str[i].substring(1)
// //             str[i] = some + first +word +  index 
// //             index += "a"
// //             break 
// //          }

         
// //         }
// //     }
// //     // console.log(string[i][0])
// // console.log(str , "str")

// let arr = [3 , 6]

// let ans = arr.reduce(function(acc , el){
//     console.log(acc , el ,  "acc")
//     return acc+el**3 
// },1)

// console.log(ans ,"ans" )

// const obj = {
//     a:10 , 
//     b:10 
// }

// obj.c = 10 
// obj.a = 30 

// console.log(obj)

// function calculateYearMonthDays(days) {
//     const year = Math.floor(days / 365);
//     const leapDays = Math.floor(year / 4);
//     const totalDays = days - leapDays;
//     const monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];
//     let month = 0;
//     let remainingDays = totalDays;
//     console.log(remainingDays,"remainingDays")
    
//     for(let i = 0; i < monthDays.length; i++) {
//       if(remainingDays >= monthDays[i]) {
//         month++;
//         remainingDays -= monthDays[i];
//       } else {
//         break;
//       }
//     }
  
//     return { year, month, remainingDays };
//   }
  
//   // Example usage
//   const days = 367 ;
//   const { year, month, remainingDays } = calculateYearMonthDays(days);
//   console.log(`${days} days = ${year} years, ${month} months, and ${remainingDays} days`);
  



let balls = [3,2,3,2,2]
let ans = []

let stack = []
let sum = [] 
for(var i=0 ; i<balls.length ; i++){
  if(ans.length > 0 && ans[ans.length-1].length == balls[i]){
    ans[i].pop()
  }
   if(ans.length> 0){
    let val = 0 
    for(var j=0 ; j<ans.length ; j++){
      val += ans[j].length 
    }
    sum.push(val)
    console.log(ans)
   }

  if(ans.length> 0 && ans[ans.length-1][0] == balls[i] ){
    ans[ans.length-1].push(balls[i])
  }
  else{
    ans.push([balls[i]])
  }
}

// console.log(ans , "ans")
console.log(sum ,"sum")