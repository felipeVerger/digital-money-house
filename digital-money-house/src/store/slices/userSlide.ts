import { getUser } from "@/services/login/login.service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { HYDRATE } from "next-redux-wrapper";

export interface UserData {
    dni: number | null;
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    phone: string
}

interface FetchUserData {
    userId : number;
    token: string
}

interface userAuthentication {
    isLoading: boolean;
    userData : UserData
}

const initialState : userAuthentication = {
    isLoading: false,
    userData: {
        dni: null,
        email: '',
        firstname: '',
        lastname: '',
        password: '',
        phone: ''
    }
}

export const fetchUserData = createAsyncThunk(
    'user/fetchUserData',
    async({userId, token} : FetchUserData) => {
        try{
           return getUser(userId, token)
        }
        catch(error : any) {
            throw error
        }
    }
)

export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state : userAuthentication) => {
                state.isLoading = true
            })
            .addCase(fetchUserData.fulfilled, (state : userAuthentication, action) => {
                state.isLoading = false;
                state.userData = action.payload
            })
            .addCase(fetchUserData.rejected, (state : userAuthentication) => {
                state.isLoading = false
            })  
            // .addCase(HYDRATE, (state: userAuthentication, action : any) => {
            //     state.userData = action.payload.user.userData
            // })   
    } 
    
})

export const getUserData = (state : RootState) => state.user.userData