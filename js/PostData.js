
export const loginPost=async (username, password)=>{
    let login=await fetch('http://localhost:5000/login', {
        method:'POST',
        mode:'cors',
        headers:{
            'Content-Type':'application/json',
        },
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
    const mesPost=await fetch('http://127.0.0.1:5500/post', {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "authorization":`${ document.cookie.split('=')[1] }`
        },
        body:JSON.stringify(body)
    })
}