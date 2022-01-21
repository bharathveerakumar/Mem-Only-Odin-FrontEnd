import { loginPost } from "./PostData.js";

const btn=document.querySelector('button')
const input=document.querySelectorAll('input')
const username=document.querySelector('.username')
const password=document.querySelector('.password')
const loginFrom=document.querySelector('.loginform')
const err=document.querySelector('.error')

input.forEach((e)=>{
    e.addEventListener('change', (eve)=>{
        if(e.value.length) e.style.zIndex=1;
        else e.style.zIndex=0;
    })
})

btn.addEventListener('click', async (e)=>{
    if(username.value.length&&password.value.length){
        const loginRes=await loginPost(username.value, password.value).catch((e)=>{
            err.style.display='block';
        })
        if(loginRes){
            document.cookie=`token=${ loginRes.token }=`;
            window.location.href='http://127.0.0.1:5500/index.html'
        }
    }
})