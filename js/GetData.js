const home='http://localhost:5000'
const login='http://localhost:5000/login'
const register='http://localhost:5000/register'


export const homeData=async ()=>{
    let token=document.cookie.token
    console.log(token)
    let data=await fetch(home,{
        'headers':`${ token }`
    })
    data=await data.json()
    return data;
}
   