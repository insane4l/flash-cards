import { apiBase } from "./apiBase"


export const authAPI = {
    register(email: string, password: string) {
        return apiBase.post<RegisterSuccessResponseType & RegisterFailureResponseType>(
            'auth/register', {email, password}).then(res => res.data)
    },
}



type RegisterSuccessResponseType = {addedUser: UserType}

type RegisterFailureResponseType = {
    error: string
    in: string
    isEmailValid: boolean
    isPassValid: boolean
    emailRegExp: {}
    passwordRegExp: string
}

type UserType = {
    _id: string
    email: string
    rememberMe: boolean
    isAdmin: boolean
    name: string
    verified: boolean
    publicCardPacksCount: number
    created: string
    updated: string
    __v: number
}