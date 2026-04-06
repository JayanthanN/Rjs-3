import React from 'react'
import '../Styles/Combine.css'

const Combinerendering = () => {
    
    let animes = ["Naruto", "One Piece", "Dragon Ball Z", "Attack on Titan", "My Hero Academia"]
  return (
    <div>
      <h1>Anime List</h1>

        {animes.length > 0 ? animes.map((anime,index)=> (
            <li className= "top" key={index}>{anime}</li>
         ))
         : <p> <h1 className= "down">No Anime available</h1> </p>
         
        }

    
    </div>
  )
}

export default Combinerendering
