const home='http://localhost:5000'


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
