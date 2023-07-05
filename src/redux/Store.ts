import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './Reducers';
import {TypedUseSelectorHook,useDispatch,useSelector} from 'react-redux'


export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});

export const useAppDispatch:()=>typeof store.dispatch=useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;