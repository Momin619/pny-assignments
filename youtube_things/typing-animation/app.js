let text = document.querySelector('.sec-text');
let textload = ()=> {
    setTimeout(()=>{
text.innerHTML = 'Freelancer'
    },0)
    setTimeout(()=>{
text.innerHTML = 'Blogger'
    },4000)
    setTimeout(()=>{
text.innerHTML = 'Coder'
    },8000)


}

if(text.innerHTML == 'Coder'){
    text.innerHTML= 'Freelancer'
}

textload();



app.js



