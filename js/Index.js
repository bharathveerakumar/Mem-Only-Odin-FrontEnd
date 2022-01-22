import { homeData } from './GetData.js'

const navBar=document.querySelector('nav')
const body=document.querySelector('body')
const msgCont=document.querySelector('.msg')


//Getting Data for Home page
const hData=await homeData()


//Rendering and Checking the user account status for rendering the data according to it
if(hData.user=="not"){
    const loginLink=document.createElement('a')
    loginLink.innerHTML='Login', loginLink.setAttribute('href', 'login.html')
    navBar.appendChild(loginLink), msgRender(),msgRender(),msgRender(),msgRender(),msgRender(),msgRender()
}
else{
    const memLink=document.createElement('a')
    memLink.innerHTML='Member', memLink.setAttribute('href', 'member.html')
    const adminLink=document.createElement('a')
    adminLink.innerHTML='Admin', adminLink.setAttribute('href', 'admin.html')
    if(hData.user.user[0].status=='IN'){
        navBar.innerHTML+='<button>Post</button>'
        navBar.appendChild(memLink), navBar.appendChild(adminLink)
        msgRender()
    }   
    else if(hData.user.user[0].status=='MEMBER'){
        navBar.appendChild(adminLink);
        memRender();
    }
    else{
        const adminMenu=document.createElement('a');
        adminMenu.className='adminmenu', adminMenu.setAttribute('href', 'adminmenu.html')
        navBar.appendChild(adminMenu)
    } 
}


function msgRender(){
    const msgs=hData.result;
    msgs.forEach((e)=>{
        const msgBox=document.createElement('div')
        msgBox.className='msgbox';
        msgBox.innerHTML+=` <div class="title"><h2>${ e.title }<h2></div>
                            <div class="content"><p>${ e.body }</p></div>
                            <div class="da"><i>Unknown</i><i>${ e.date }</i></div>`
        msgCont.appendChild(msgBox)
    })
}


function memRender(){
    const msgs=hData.result;
    const msgBox=document.createElement('div')
    msgBox.className='msgbox';
    msgs.forEach((e)=>{
        msgBox.innerHTML+=` <div class="title">${ e.title }</div>
                            <div class="content"><p>${ e.body }</p></div>
                            <div class="da"><h3>${ e.user_info.nickname }</h3><h3>${ e.date.slice(0, 10) }</h3></div>`
        msgCont.appendChild(msgBox)
    })
    msgCont.appendChild(msgBox)
}

const msgbox=document.querySelectorAll('.msgbox')

msgbox.forEach((e)=>{
    if(e.offsetTop<scrollY+window.innerHeight) e.classList.add('tr')
    else e.classList.remove('tr')
})

document.addEventListener('scroll', (ev)=>{
    msgbox.forEach((e)=>{
        if(e.offsetTop<scrollY+window.innerHeight-50&&e.offsetTop>scrollY-50) e.classList.add('tr')
        else e.classList.remove('tr')
    })
})