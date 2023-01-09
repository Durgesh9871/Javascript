
//  In throtling we can ---limit the rate -- 

// for example----
//  there is a button and user is clicking on a button 10 times so we cant send api req times, So for this we use throtling like first api is called when the button is click on first time and the next req is called after certain time so we limit the  rate the of flow -----------

let counting = 0 

const IncreaseCount = ()=>{
    console.log("Throttling" , counting++)
}

//  We can also maintain our context and this case here and if any arguments are passes we can also maintain it -------------------

const throttling = (func , limit)=>{
    let flag = true 
    return function(){
        let context = this , args = arguments ;
       if(flag == true){
        func.apply(context , args)
        flag = false 

        setTimeout(()=>{
         flag = true 
        },limit)
       }
    }

}

//  for rembering why apply see call , apply, bind code --------------------------------------

const betterThrottling = throttling(IncreaseCount , 1000)