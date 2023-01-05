
//  By default if we did not pass any value it act like 
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