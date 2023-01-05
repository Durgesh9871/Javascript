
//  By default if we did not pass any value it act like event bubbling 
// if we pass true then its act like event capturing 
//  if we pass false then its act like event bubbling 
document.querySelector("#child")
.addEventListener('click' ,()=>{
    console.log('child')
})

document.querySelector("#parent")
.addEventListener('click' ,()=>{
    console.log('parent')
})

document.querySelector("#grandParent")
.addEventListener('click' ,()=>{
    console.log('grandParent')
})