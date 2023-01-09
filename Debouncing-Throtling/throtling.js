
//  In throtling we can ---limit the rate -- 

// for example----
//  there is a button and user is clicking on a button 10 times so we cant send api req times, So for this we use throtling like first api is called when the button is click on first time and the next req is called after certain time so we limit the  rate the of flow -----------

let counting = 0 

const IncreaseCount = ()=>{
    console.log("Throttling" , counting++)
}


const throttling = (func , limit)=>{
    let flag = true 
    return function(){
       if(flag == true){
        func()
        flag = false 

        setTimeout(()=>{
         flag = true 
        },limit)
       }
    }

}

const betterThrottling = throttling(IncreaseCount , 1000)