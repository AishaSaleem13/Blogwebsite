import React, { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authservices from './appwrite/auth'
import { login,logout } from './store/authSlice'
import { Footer, Header } from './components'

function App() {
  const [loading ,setloading]=useState(true)
const dispatch = useDispatch()

useEffect(()=>{
  authservices.getCurrent().then((userdata)=>{
    if (userdata){
dispatch((login(userdata)))

    }
    else{
      dispatch(logout(userdata))
      
    }
  })
  .finally(()=>setloading(false))
},[])
 
return !loading ?(
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      <Header/>
      <main>
        logo
      </main>
      <Footer/>
    </div></div>
):null

 
}




export default App