import React from 'react'

const Listrendering = () => {
    
    let brands =[
        {id: 1, name: 'Asus'},
        {id: 2, name: 'Lenovo'},
        {id: 3, name: 'Apple'},
        {id: 4, name: 'HP'},
        {id: 5, name: 'Dell'}
    ]
  return (
    <div style = {{backgroundcolor:'grey', color: 'blue'}} >

      {brands.map((brand,index) => (

        <li key={index}>{brand.name}</li>

        
        
      ))}
    </div>
  )
}

export default Listrendering
