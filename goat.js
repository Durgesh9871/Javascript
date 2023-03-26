let alpha = "deephjbe"
let bita = "seeeddd"

let map = {}
let map2 = {} 

for(let item of alpha){
  map[item]= map[item]? map[item]+1:1
}

for(let item of bita){
  map2[item]= map2[item]? map2[item]+1:1
}
let count = 0 

for(let value in map){
  for(let value2 in map2){
    if(value == value2){
       if(map[value] == map2[value2]){
        count += map[value]
        break 
       }
       else if(map[value] > map2[value2]){
        count += map2[value2]
        break 
       }
       else{
        count += map[value]
       }
    }
  }
}

console.log(count , "count")