
//  By default if we did not pass any value it act like event bubbling 
// if we pass true then its act like event capturing 
//  if we pass false then its act like event bubbling 
//  e.stopPropagation() stops the event propagation cycle which is actually a good way if we only want to excute one event
//  if we use e.stop then the event would not bubble out or if the value is true then the event is not going to trickle  
document.querySelector("#child")
.addEventListener('click' ,(e)=>{
    console.log('child')
    e.stopPropagation()
},false )

document.querySelector("#parent")
.addEventListener('click' ,()=>{
    console.log('parent')
},false )

document.querySelector("#grandParent")
.addEventListener('click' ,()=>{
    console.log('grandParent')
   
},false)