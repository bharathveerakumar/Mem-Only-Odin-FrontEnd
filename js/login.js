import { loginPost } from "./PostData.js";

const btn=document.querySelector('button')
const input=document.querySelectorAll('input')
const username=document.querySelector('.username')
const password=document.querySelector('.password')
const loginFrom=document.querySelector('.loginform')
const err=document.querySelector('.error')
const loader=document.querySelector('.loader')

input.forEach((e)=>{
    e.addEventListener('change', (eve)=>{
        if(e.value.length) e.style.zIndex=1;
        else e.style.zIndex=0;
    })
})

btn.addEventListener('click', async (e)=>{
    if(username.value.length&&password.value.length){
        loader.style.display='flex'
        const loginRes=await loginPost(username.value, password.value).catch((e)=>{
            err.style.display='block';
        })
        if(loginRes){
            let now=new Date(Date.now()+3000).toUTCString()
            document.cookie=`token=${ loginRes.token }; expires:${ now +3000}; path=/`
            window.location.href='https://mem-only-odin-bvk.netlify.com/index.html'
        }
    }
})