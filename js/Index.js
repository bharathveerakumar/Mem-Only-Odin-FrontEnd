import { homeData } from './GetData.js'
import { loginPost } from './PostData.js'

const navBar=document.querySelector('nav')
const body=document.querySelector('body')

//Getting Data for Home page
const hData=await homeData()

//Rendering and Checking the user account status for rendering the data according to it
if(hData.user=="not"){
    const loginLink=document.createElement('a')
    loginLink.innerHTML='Login', loginLink.setAttribute('href', 'login.html')
    const registerLink=document.createElement('a')
    registerLink.innerHTML='Register', registerLink.setAttribute('href', 'register.html')
    navBar.appendChild(loginLink), navBar.appendChild(registerLink)
    msgRender()
}
else{
    const memLink=document.createElement('a')
    memLink.innerHTML='Member', memLink.setAttribute('href', 'member.html')
    const adminLink=document.createElement('a')
    adminLink.innerHTML='Admin', adminLink.setAttribute('href', 'admin.html')
    if(hData.user.status=='IN'){
        navBar.appendChild(memLink), navBar.appendChild(adminLink)
        msgRender()
    }
    else if(hData.user.status=='MEMBER'){
        navBar.appendChild(adminLink)
    } 
}


function msgRender(){
    const msgs=hData.result;
    const msgBox=document.createElement('div')
    msgs.forEach((e)=>{
        msgBox.className='msgbox';
        msgBox.innerHTML+=`<div class="title">${ e.title }</div>
                            <div class="content">${ e.body }</div>
                            <div class="da"><h3>Unknown</h3<h3>${ e.date }</h3></div>`
    })
    body.appendChild(msgBox)
}