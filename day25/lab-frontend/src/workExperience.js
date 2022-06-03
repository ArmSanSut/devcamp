import { createSlice } from "@reduxjs/toolkit";

export const workExperience = createSlice({
    name: 'John',
    initialState:{
        department : 'Marketing'
    },
    reducers: {
        sale : state => {
            state.department = 'Sales'
        },
        programmer : state => {
            state.department = 'Programmer'
        },
        setDefault : state => {
            state.department = 'Marketing'
        }
    }
})

export default workExperience.reducer

export const { sale, programmer, setBack } = workExperience.actions;

