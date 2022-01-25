import { adminData } from "./GetData.js"
import { updatePost, deletePost } from "./PostData.js";

const content=document.querySelector('.content'),
updateBox=document.querySelector('.updateBox'),
inputs=document.querySelectorAll('.j'),
navBar=document.querySelector('nav')

// Getting the Admin Data of users...
const adminDat=await adminData();
console.log(adminDat)

navBar.innerHTML+=`<h2 class="userTitle">${ adminDat.user.nickname }</h2>`

adminDat.result.forEach((e)=>{
    e.posts.forEach((e1)=>{
        content.innerHTML+=`<div class="post">
            <h2 class="user">${ e.nickname }</h2> 
            <h3 class="postTitle">${ e1.title }</h3>
            <p>${ e1.body }</p>
            <div class="update">
                <button class="delete" data-id="${ e1._id }">Delete</button>
                <button class="updateb" data-id="${ e1._id }">Update</button>
                <h4>${ e1.date.split('T')[0] }</h4>
            </div>
        </div>`
    })
})

let flag=0, id;
document.querySelectorAll('.updateb').forEach((e)=>{
    e.addEventListener('click', ()=>{
        updateBox.classList.toggle('updateFlex')
        updateBox.style.top=`${ scrollY+130 }px`
        setTimeout(()=>flag=!flag, 100), id=e.dataset['id']
    })
})

document.querySelector('.updateS').addEventListener('click', async ()=>{
    updateBox.classList.remove('updateFlex')
    const body={
        _id:id,
        title:document.querySelector('input').value,
        body:document.querySelector('textarea').value
    }
    await updatePost(body)
    window.location.href='http://127.0.0.1:5500/admin.html'
})


document.querySelector('.updateBox img').addEventListener('click', ()=>{
    updateBox.classList.remove('updateFlex')
})

inputs.forEach((e)=>{
    e.addEventListener('change', ()=>{
        if(e.value.length) e.style.zIndex=1;
        else e.style.zIndex=0;
    })
})

document.querySelectorAll('.delete').forEach((e1)=>{
    e1.addEventListener('click', (e)=>{
        deletePost(e1.dataset['id'])
        window.location.href='http://127.0.0.1:5500/admin.html'
    })
})