import { createSlice } from "@reduxjs/toolkit";
 export const SliceAuth =createSlice({
    name:'authentication',
    initialState:{
        status:false,
    userdata:null},
        reducers:{
            login:(state,data) => {
                state.status=true
              state.userdata=data.payload
            },
            logout:(state)=>{
 state.status=false;
 state.userdata=null;
            }
        }
  })
  export const {login,logout}=SliceAuth.actions
  export default SliceAuth