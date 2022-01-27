
export const loginPost=async (username, password)=>{
    let login=await fetch('https://mem-only-odin-bvk.herokuapp.com/login', {
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
    let register=await fetch('https://mem-only-odin-bvk.herokuapp.com/register', {
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
    let mesPost=await fetch('https://mem-only-odin-bvk.herokuapp.com/post', {
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
    console.log(mesPost)
}

export const memPost=async (member)=>{
    let memData=await fetch('https://mem-only-odin-bvk.herokuapp.com/member', {
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
    return memData;
}


export const updatePost=async (body)=>{ 
    let updateRes=await fetch('https://mem-only-odin-bvk.herokuapp.com/update', {
        method:'POST',
        headers:{
            'authorization':`${ document.cookie.split('=')[1] }`,
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body)
    })
}

export const deletePost=async (id)=>{
    let deleteRes=await fetch('https://mem-only-odin-bvk.herokuapp.com/delete', {
        method:'POST',
        headers:{
            'authorization':`${ document.cookie.split('=')[1] }`,
            'Content-Type':'application/json'
        },
        body:JSON.stringify({ _id:id })
    })
}

export const adminPost=async (admin)=>{
    let adminRes=await fetch('https://mem-only-odin-bvk.herokuapp.com/adminLogin', {
        method:'POST',
        headers:{
            'authorization':`${ document.cookie.split('=')[1] }`,
            'Content-Type':'application/json'
        },
        body:JSON.stringify({ admin:admin })
    })
    adminRes=await adminRes.json();
    return adminRes;
}