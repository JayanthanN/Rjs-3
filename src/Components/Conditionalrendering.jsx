import React from 'react'
import '../Styles/Conditional.css'

const ConditionalRendering = () => {
    
    let user = true
  return (
    <div className="container">
      {user ? <h1>Login Sucessfull</h1> : <h1>Login Failed</h1>}
    </div>
  )
}

export default ConditionalRendering
