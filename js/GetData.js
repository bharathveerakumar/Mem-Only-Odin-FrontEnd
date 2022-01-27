const home='https://mem-only-odin-bvk.herokuapp.com/'


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
    let adminDat=await fetch('https://mem-only-odin-bvk.herokuapp.com/admin', {
        method:'GET',
        headers:{
            'authorization':`${ document.cookie.split('=')[1] }`
        }
    })
    adminDat=await adminDat.json()
    return adminDat
}
