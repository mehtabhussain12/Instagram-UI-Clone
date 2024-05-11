import React from 'react'
import user from "../assets/user.png"
function Profile() {
  return (
   <>
   
   <main className="lg:flex gap-6 justify-center items-center lg:w-[20%] md:w-[0%] sm:w-full w-full hidden sm:hidden md:block">
    <div >
        <img src={user} alt="" width={25}/>    
    </div>
    <div>
    <h1>Profile</h1>
        <p>username</p> 
    </div>
   </main>
   
   </>
  )
}

export default Profile
