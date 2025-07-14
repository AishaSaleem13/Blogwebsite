import React from 'react'
import { useDispatch } from 'react-redux'
import authservices from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogOutBtn() {
const dispatch =useDispatch()
const  logoutHandler =
()=>{authservices.logout().then(()=>{
dispatch(logout())
})
}
  return (
    <button>LogOutBtn</button>
  )
}

export default LogOutBtn