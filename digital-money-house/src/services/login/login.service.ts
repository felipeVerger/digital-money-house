import { LoginData, LoginResponse } from "@/types/login.types"

export const getLogin = async(loginData : LoginData) : Promise<LoginResponse> => {
    const response = await fetch('https://digitalmoney.ctd.academy/api/login', {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(loginData)
    })
    //const data : LoginResponse = await response.json()
    //return data
    return await response.json()
}