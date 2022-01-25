
export const loginPost=async (username, password)=>{
    let login=await fetch('http://localhost:5000/login', {
        method:'POST',
        mode:'cors',
        headers:{
            'Content-Type':'application/json',
        },
        credentials:'include',
        body:JSON.stringify({
            "username":username,
            "password":password
        })
    })
    login=await login.json()
    return login         
}

export const regPost=async (body)=>{
    let register=await fetch('http://localhost:5000/register', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            "username":body.username,
            "nickname":body.nickname,
            "password":body.password,
            "cpassword":body.cpassword,
            "logo":body.logo
        })
    })
    register=await register.json()
    return register
}

export const messPost=async (body)=>{
    let mesPost=await fetch('http://localhost:5000/post', {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "authorization":`${ document.cookie.split('=')[1] }`
        },
        body:JSON.stringify({
            "title":body.title,
            "body":body.body
        })
    })
    mesPost=await mesPost.json()
}

export const memPost=async (member)=>{
    let memData=await fetch('http://localhost:5000/member', {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'authorization':`${ document.cookie.split('=')[1] }`
        },
        body:JSON.stringify({
            "member":member
        })
    })
    memData=await memData.json()
    document.cookie=`token=${memData.token}`
}


export const updatePost=async (body)=>{ 
    let updateRes=await fetch('http://localhost:5000/update', {
        method:'POST',
        headers:{
            'authorization':`${ document.cookie.split('=')[1] }`,
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body)
    })
}

export const deletePost=async (id)=>{
    let deleteRes=await fetch('http://localhost:5000/delete', {
        method:'POST',
        headers:{
            'authorization':`${ document.cookie.split('=')[1] }`,
            'Content-Type':'application/json'
        },
        body:JSON.stringify({ _id:id })
    })
}