import {createSlice,PayloadAction} from '@reduxjs/toolkit';
// import type { RootState } from './Store';


export interface Contacts {
    id: number;
    firstName: string;
    lastName: string;
    status: string;
}

interface ContactsState {
    contacts: Contacts[];
}

const initialState: ContactsState = {
    contacts: [],
};

const ContactSlice=createSlice({
    name: 'contact',
    initialState,
    reducers:{
        addContact:(state,action: PayloadAction<Contacts>)=>{
            state.contacts.push(action.payload);
        },
        deleteContact:(state,action: PayloadAction<{id: number}>)=>{
            state.contacts=state.contacts.filter((ele)=>ele.id !== action.payload.id)
        },
        updateContact:(state,action: PayloadAction<Contacts>)=>{
            const updatedContact =action.payload;
            const index = state.contacts.findIndex((ele)=>ele.id === updatedContact.id);
            if(index !== -1){
                state.contacts[index] = updatedContact
            }
        },
    },
});

export const {addContact,deleteContact,updateContact} = ContactSlice.actions;

export default ContactSlice.reducer;