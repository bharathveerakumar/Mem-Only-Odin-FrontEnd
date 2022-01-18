import { homeData } from './GetData.js'
import { loginPost } from './PostData.js'

const navBar=document.querySelector('nav')

//Getting Data for Home page
const hData=await homeData()

//Checking the user account status for showing data according to it
if(hData.status=="not"){
    const loginLink=document.createElement('a')
    loginLink.innerHTML='Login', loginLink.setAttribute('href', 'login.html')
    const registerLink=document.createElement('a')
    registerLink.innerHTML='Register', registerLink.setAttribute('href', 'register.html')
    navBar.appendChild(loginLink), navBar.appendChild(registerLink);
}
else{
    const memLink=document.createElement('a')
    memLink.innerHTML='Member', memLink.setAttribute('href', 'member.html')
    const adminLink=document.createElement('a')
    adminLink.innerHTML='Admin', adminLink.setAttribute('href', 'admin.html')
    
}
