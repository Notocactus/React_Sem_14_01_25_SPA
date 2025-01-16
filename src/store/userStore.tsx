import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user';


const store = configureStore({
    reducer: {
        // counter: counterSliceReducer,
        users: userSlice,
    },
    // middleware: (getDefaultMiddleware) => {
    //     return getDefaultMiddleware().concat(logger)
    // }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store