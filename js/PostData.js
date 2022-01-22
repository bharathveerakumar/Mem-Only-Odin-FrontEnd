
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
    console.log(body)
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