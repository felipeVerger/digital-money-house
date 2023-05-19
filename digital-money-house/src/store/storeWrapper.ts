import { Action, AnyAction, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit'
//import { accountSlice } from './slices/accountSlice'
//import { userSlice } from './slices/userSlide'
import  {userSlice} from './slices/userSlide'
import {accountSlice} from './slices/accountSlice'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'

// const combinedReducer = combineReducers({
//   account : accountSlice,
//   user: userSlice
// })

export const store = configureStore({
  reducer: {
    account : accountSlice.reducer,
    user: userSlice.reducer
  },
})

// const reducer = (state: any, action: AnyAction) => {
//   if (action.type === HYDRATE) {
//     const nextState = {
//       ...state, // use previous state
//       ...action.payload, // apply delta from hydration
//     };
//     return nextState;
//   } else {
//     return combinedReducer(state, action);
//   }
// };

export const makeStore = () => 
  configureStore({
    reducer: {
      account : accountSlice.reducer,
      user: userSlice.reducer
    },
  })


type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<Store>(makeStore, { debug: true });