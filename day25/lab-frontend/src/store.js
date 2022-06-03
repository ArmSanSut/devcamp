import { configureStore } from '@reduxjs/toolkit'
import calculateReducer from './calculateReducer'
import workExperience from './workExperience'

const store = configureStore({
    reducer: {
        counter : calculateReducer,
        position: workExperience
    }
})

export default store
