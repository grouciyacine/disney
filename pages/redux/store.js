import { configureStore ,getDefaultMiddleware} from "@reduxjs/toolkit";
import userReducer from '../redux/features/user'
import moviesReducer from '../redux/features/movies/moviesSlice'
//you should create store.js and a slice.js (card.js)
export const store=configureStore({
    reducer:{
        user:userReducer,
        movie:moviesReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
      }),
})