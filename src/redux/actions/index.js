import axios from "axios"
import {url} from "../../config"
const analyze=(data)=>({
    type:"ANALYZE",
    data
})
export const startAnalyze=(data)=>{
    return (dispatch)=>
    {
        return axios.post(url+"analyze",{data}).then((response)=>{
            dispatch(analyze(response.data))
        })
    }
  
}
export const startGetHistory=()=>{
    return (dispatch)=>{
        return axios.get(url)
    }
}
export const startGetNotifications=()=>{
    return (dispatch)=>{
        return axios.get(url+"notifications")
    }
}
export const sendNotification=(data)=>{
    return (dispatch)=>{
        return axios.post(url+"send-notification",{data})
    }
}
export const addNotification=(data)=>{
    console.log("ADD NOTI ",data);
    return {
    type:"ADD_NOTI",
    data
}
}


