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
   