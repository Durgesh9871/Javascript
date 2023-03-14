
let str = ["I" , "speak" , "goat" ,"Latin" , "ice" ]

let alpha = "aeiou"  
let some = alpha.substring(1)
//  some)


let word = "ma" 
let index = "a" 

for(var i=0 ; i<str.length ; i++){

    for(var j=0 ; j<str[i].length ; j++ ){

        if(str[i][0] == "a" || str[i][0] == "e" || str[i][0] == "i" || str[i][0] == "o" || str[i][0] == "u"){
           str[i] += word + index 
           index += "a"
           break 
        }
        else if(str[i][0] == "A" || str[i][0] == "E" || str[i][0] == "I" || str[i][0] == "O" || str[i][0] == "U"){
            str[i] += word + index 
            index += "a"
            break 
         }
         else{
            let first = str[i][0]
            let some = str[i].substring(1)
            str[i] = some + first +word +  index 
            index += "a"
            break 
         }

         
        // console.log(string[i][0])
    }
}
console.log(str)