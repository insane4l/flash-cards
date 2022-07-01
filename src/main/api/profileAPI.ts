
import {ProfileStateType} from "../bll/reducers/profileReducer";
import { apiBase } from "./apiBase"

type UpdateUserType={
    updatedUser:ProfileStateType
    token:string
    tokenDeathTime:number

}
export const profileAPI = {

    me() {
        return apiBase.post(`auth/me`,{})
            .then(res => res.data)
    },
    updateUserInfo(name:string, avatar:string){
        return apiBase.put<UpdateUserType>(`auth/me`,{name,avatar})
            .then(res=>res.data)
    }
}


