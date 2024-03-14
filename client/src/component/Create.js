import React, { useState } from 'react'

const Create = () => {
  const [property,setProperty]=useState('');
  const [location,setLocation]=useState('');
  const [space,setSpace]=useState('');
  const [img,setImg]=useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const list = { property, location, space, img };

    fetch('http://localhost:8000/list/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(list)
    }).then(() => {
      console.log('new property added');
    })
  }

  return (
    <div className='create'>
      <h2>Add a new listing</h2>
      <form onSubmit={handleSubmit}>
        <label>Property Name:</label>
        <input
          type='text' 
          required
          value={property}
          onChange={(e) => setProperty(e.target.value)}
        />
        <label>Property Location:</label>
        <input 
          type='text' 
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label>Property Space:</label>
        <input 
          type='text' 
          required
          value={space}
          onChange={(e) => setSpace(e.target.value)}
        />
        <label>Property Image:</label>
        <input
          type='link'
          required
          value={img}
          onChange={(e) => setImg(e.target.value)}
          />
        <button>Add Property</button>
        <h2>{property}</h2>
        <h3>{location}</h3>
        <p>{space}</p>
        <img src={img} alt = 'Upload Image' height ='300' width ='500' className ='img'></img>
      </form>
    </div>
  )
}

export default Create