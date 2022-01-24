const home='http://localhost:5000'
const login='http://localhost:5000/login'
const register='http://localhost:5000/register'


export const homeData=async ()=>{
    let data=await fetch(home,{
        method:"GET",
        headers:{
            'authorization':`${document.cookie.split('=')[1]}`
        }
    })
    data=await data.json()
    return data;
}
 

export const adminData=async ()=>{
    let adminDat=await fetch('http://localhost:5000/admin', {
        method:'GET',
        headers:{
            'authorization':`${ document.cookie.split('=')[1] }`
        }
    })
    adminDat=await adminDat.json()
    return adminDat
}


export const adminUpdate=async ()=>{
    let result=await fetch('http://localhost:5000/update?id:61ed39aeb4f2940e813b45db', {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'authorization':`${document.cookie.split('=')[1]}`
        },
        body:JSON.stringify({
            "body":"1"
        })
    })
    result=await result.json()
    return result
}