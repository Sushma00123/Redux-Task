import fakeStoreApi from "../../apis/fakeStoreApi"
export const addData = (payload)=>{
return {
    type:'ADD',
    payload:payload
}
}
export const fetch_Data = ()=>{
    return async  function(disptach){
        const response = await fakeStoreApi.get('/users');
        disptach({type:'FETCH', payload:response.data})
        // console.log(response.data)
    }
}



