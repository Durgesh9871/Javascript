
//  By default if we did not pass any value it act like event bubbling 
// if we pass true then its act like event capturing 
//  if we pass false then its act like event bubbling 
//  e.stopPropagation() stops the event propagation cycle which is actually a good way if we only want to excute one event 
document.querySelector("#child")
.addEventListener('click' ,()=>{
    console.log('child')
},false )

document.querySelector("#parent")
.addEventListener('click' ,()=>{
    console.log('parent')
},false )

document.querySelector("#grandParent")
.addEventListener('click' ,(e)=>{
    console.log('grandParent')
    e.stopPropagation()
},false)