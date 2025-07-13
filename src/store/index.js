

import {configureStore} from '@reduxjs/toolkit'
import SliceAuth from './authSlice'
 const Store = configureStore({
  reducer:{
     REDUCERONE: SliceAuth.reducer
  },
  devTools: true,
 })
 export  default Store