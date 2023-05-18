import { useAppDispatch } from "@/hooks/storeHooks";
import { getAccount } from "@/services/login/login.service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface UserAccount {    
    alias: string;
    available_amount: number | null;
    cvu: string;
    id: number | null;
    user_id: number | null
}

interface Authentication {    
    isLoading : boolean;
    isLogged : boolean;
    userAccount : UserAccount
}


export const fetchAccountByToken = createAsyncThunk(
    'account/fetchAccount',
    async (token : string) => {
        try {
            return getAccount(token)
        }
        catch (error : any) {
            throw error
        }
    }
)

const initialState: Authentication = {
    isLoading: false,
    isLogged: typeof window !== 'undefined' && localStorage.getItem('token') ? true : false,
    userAccount:  {
        alias: '',
        available_amount: 0,
        cvu: '',
        id: null,
        user_id: null
    }   
}


export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        resetAuthentication : () => {
            localStorage.removeItem('token');
            return {
                ...initialState,
                //isLogged : false
            }
        } 

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAccountByToken.pending, (state : Authentication) => {
                state.isLoading = true
            })
            .addCase(fetchAccountByToken.fulfilled, (state : Authentication, action) => {
                state.isLoading = false;
                state.userAccount = action.payload;
                {state.userAccount.user_id
                    ? state.isLogged = true                        
                    : state.isLogged = false
                }                
            })
            .addCase(fetchAccountByToken.rejected, (state : Authentication) => {
                state.isLoading = false;
                state.isLogged = false
            })
    }
})

export const getAccountData = (state : RootState) => state.account.userAccount
export const getIsUserLooged = (state : RootState) => state.account.isLogged
