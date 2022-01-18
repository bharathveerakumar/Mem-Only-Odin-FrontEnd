
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