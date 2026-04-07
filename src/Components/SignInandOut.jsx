import React,{useState} from 'react'
import "./SignInandOut.css"


const SignInandOut = () => {
    const [user, setuser ] = useState()
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
    const handleSignIn = () => {
        if(!user){
            if(email && password){
                setuser(true)
            }else{
                alert("Please enter email and password")
            }
        }else{
            setuser(false)
            setemail("")
            setpassword("")
        }
    }
  return (
    <div className="Page">
      <h1>{user ? "Welcome" : "Sign In Page"}</h1>

      {!user && (
        <>
          <div className= "container">
          <label htmlFor ="email" >Email:</label>
          <input type ="email" id = "email" value = {email} onChange={(e)=> setemail(e.target.value)}  /> 
          </div>

          <div className= "container">
          <label htmlFor ="password" >Password:</label>
          <input type = "Password" id = "password" value = {password} onChange={(e)=> setpassword(e.target.value)} /> 
          </div>
        </>
      )}
         <button onClick={handleSignIn}>Sign { user ? "Out" : "In" }</button> 
    </div>
  )
}


export default SignInandOut
