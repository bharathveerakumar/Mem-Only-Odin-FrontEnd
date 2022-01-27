import { homeData } from './GetData.js'
import { messPost, memPost, adminPost } from './PostData.js'

const navBar=document.querySelector('nav')
const msgCont=document.querySelector('.msg')
const post=document.querySelector('.post')
const input=document.querySelectorAll('.inp')
const submit=document.querySelector('.submit'),
upgrade=document.querySelectorAll('.upgrade'),
inputs=document.querySelectorAll('input'),
loader=document.querySelector('.loader')



//Getting Data for Home page
const hData=await homeData()
loader.style.display='none'

input.forEach((e)=>{
    e.addEventListener('change', ()=>{
        if(e.value.length) e.style.zIndex=2;
        else e.style.zIndex=0;
    })
})

inputs.forEach((e)=>{
    e.addEventListener('change', ()=>{
        if(e.value.length) e.style.zIndex=2;
        else e.style.zIndex=0;
    })
})


//Rendering and Checking the user account status for rendering the data according to it
if(hData.user=="not"){
    const loginLink=document.createElement('a')
    loginLink.innerHTML='Login', loginLink.setAttribute('href', 'login.html')
    navBar.appendChild(loginLink), msgRender();
}
else{
    navBar.innerHTML+='<button>Post</button>';
    const memLink=document.createElement('button')
    memLink.innerHTML='Member', memLink.className='memLink g';
    const adminLink=document.createElement('button')
    adminLink.innerHTML='Admin', adminLink.className='adminLink g';

    if(hData.user.status=='IN'){
        navBar.appendChild(memLink), navBar.appendChild(adminLink)
        memLink.addEventListener('click', ()=>{
            upgrade[0].style.top=`${scrollY+150}px`
            upgrade[0].classList.toggle('upgradeFlex')
        });
        adminLink.addEventListener('click', ()=>{
            upgrade[1].style.top=`${scrollY+150}px`
            upgrade[1].classList.toggle('upgradeFlex')
        });
        msgRender();
    }   
    else if(hData.user.status=='MEMBER'){
        navBar.appendChild(adminLink);
        adminLink.addEventListener('click', ()=>{
            upgrade[1].style.top=`${ scrollY+150 }px`
            upgrade[1].classList.toggle('upgradeFlex')
        });
        memRender();
    }
    else{
        const adminMenu=document.createElement('a');
        adminMenu.innerHTML='Admin menu', adminMenu.setAttribute('href', 'admin.html')
        navBar.appendChild(adminMenu)
        memRender();
    }

}


// Rendering content for user who didn't logged in
function msgRender(){
    const msgs=hData.result;
    msgs.forEach((e)=>{
        const msgBox=document.createElement('div')
        msgBox.className='msgbox';
        msgBox.innerHTML+=` <div class="title"><h2>${ e.title }<h2></div>
                            <div class="content"><p>${ e.body }</p></div>
                            <div class="da"><i>Unknown</i><i>${ e.date.split('T')[0] }</i></div>`
        msgCont.appendChild(msgBox)
    })
}


// Rendering content for MEMBERS
function memRender(){
    const msgs=hData.result;

    msgs.forEach((e)=>{
        const msgBox=document.createElement('div')
        msgBox.className='msgbox';
        msgBox.innerHTML+=` <div class="title">${ e.title }</div>
                            <div class="content"> ${ e.body } </div>
                            <div class="da"><h3>${ e.user_info[0].nickname }</h3><h3>${ e.date.split('T')[0] }</h3></div>`
        msgCont.appendChild(msgBox)
    })
}


// Adding animation to the message content
const msgbox=document.querySelectorAll('.msgbox')

msgbox.forEach((e)=>{
    if(e.offsetTop<scrollY+window.innerHeight) e.classList.add('tr')
    else e.classList.remove('tr')
})

document.addEventListener('scroll', (ev)=>{
    msgbox.forEach((e)=>{
        if(e.offsetTop<scrollY+window.innerHeight-50&&e.offsetTop>scrollY-700) e.classList.add('tr')
        else e.classList.remove('tr')
    })
})
// **** //


// post button
const button=document.querySelector('button'),
uInput=document.querySelectorAll('.upgrade input'),
mError=document.querySelector('.errorMesm'),
aError=document.querySelector('.errorMesa')


//post form...
button.addEventListener('click', ()=>{
    post.style.top=`${ scrollY+100 }px`
    post.classList.toggle('active')
})


//sending content to the server for posting a message...
submit.addEventListener('click', async ()=>{
    const body={
        "title":input[0].value,
        "body":input[1].value
    }  
    await messPost(body);
    post.classList.remove('active')
    window.location.href='https://mem-only-odin-bvk.netlify.com/index.html'
})


//member submit
document.querySelector('.mSubmit').addEventListener('click', async ()=>{
    let adminRes=await memPost(uInput[0].value)
    if(adminRes.error) window.location.href='https://mem-only-odin-bvk.netlify.com/index.html';
    else{
        console.log(mError)
        mError.classList.remove('rem')
        setTimeout(()=>mError.classList.add('rem'), 4000);
    }
})

//admin submit
document.querySelector('.aSubmit').addEventListener('click', async ()=>{
    let adminRes=await adminPost(uInput[1].value)
    if(adminRes.error) window.location.href='https://mem-only-odin-bvk.netlify.com/index.html';
    else{
        aError.classList.remove('rem')
        setTimeout(()=>aError.classList.add('rem'), 4000);
    }
})