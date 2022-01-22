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
    const errors=document.createElement('div')
    errors.className='errors';

    const checked=document.querySelector('input[name="icon"]:checked');
    let regData;
    if(checked){
        const body={
            "username":username.value,
            "nickname":nickname.value,
            "password":password.value,
            "cpassword":cpassword.value,
            "logo":checked.value
        }
        regData=await regPost(body);
        if(regData.error!="success"){
            regData.error.forEach((e)=>{
                errors.innerHTML+=`<p>${e.msg}</p>`
            })
        }
    }
    else errors.innerHTML+='<p>Please Fill all the details!!!</p>', regData={'error':'failed'};

    if(regData.error=='success') window.location.href='http://127.0.0.1:5500/login.html'

    regForm.appendChild(errors)
    timeOut();
})


function timeOut(){
    setTimeout(()=>{
        regForm.removeChild(regForm.lastElementChild)
    }, 3000);
}