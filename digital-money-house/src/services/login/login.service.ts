import { UserAccount } from "@/store/slices/accountSlice"
import { UserData } from "@/store/slices/userSlide"
import { LoginData, LoginResponse } from "@/types/login.types"

export const getLogin = async(loginData : LoginData) : Promise<LoginResponse> => {
        const response = await fetch('https://digitalmoney.ctd.academy/api/login', {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(loginData)
        })        
        return await response.json()   
}

export const getAccount = async(token : string) : Promise<UserAccount>=> {
    const response = await fetch('https://digitalmoney.ctd.academy/api/account', {
        method: "GET",
        headers : {
            "Content-Type" : "application/json",
            "Authorization" : token
        }
    })
    return await response.json()
}

export const getUser = async(userId : number, token : string) : Promise<UserData> => {
    const response = await fetch(`https://digitalmoney.ctd.academy/api/users/${userId}`, {
        method: "GET",
        headers : {
            "Content-Type" : "application/json",
            "Authorization" : token
        }
    })
    return await response.json()
}

