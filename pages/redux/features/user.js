import { createSlice } from "@reduxjs/toolkit"

const initialState={
    name:"",
    email:"",
    photo:"",
}
const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        setUserLoginDetails:(state,actions)=>{
            state.name=actions.payload.name;
            state.email=actions.payload.email;
            state.photo=actions.payload.photo;
        },
        setSignOUtState:(state)=>{
            state.email=null;
            state.photo=null;
            state.name=null;
        }
    },
})
export const {setSignOUtState,setUserLoginDetails}=userSlice.actions;
export const selectUserName=(state)=>state.user.name;
export const selectUserEmail=(state)=>state.user.email;
export const selectUserphoto=(state)=>state.user.photo;
export default userSlice.reducer //userSlice.reducer is important for use our functions