import { regPost } from "./PostData.js";

const username=document.querySelector('.name'),
nickname=document.querySelector('.nick'),
password=document.querySelector('.p'),
cpassword=document.querySelector('.cp'),
input=document.querySelectorAll('input'),
regForm=document.querySelector('.registerform'),
button=document.querySelector('button')


input.forEach((e)=>{
    e.addEventListener('change', (eve)=>{
        if(e.value.length>0) e.style.zIndex=1;
        else e.style.zIndex=0;
    })
})


button.addEventListener('click', async (e)=>{
    const body={
        "username":username.value,
        "nickname":nickname.value,
        "password":password.value,
        "cpassword":cpassword.value,
        "logo":document.querySelector('input[name="icon"]:checked').value
    }
    const regData=await regPost(body);
    const errors=document.createElement('div')
})