import React from 'react'

const Details = ({list}) => {
  return (
    <div className='Details'>
        {list.map(item=> (
            <div className='list-preview'>
                <h2>{item.property}</h2>
                <h3>{item.location}</h3>
                <p>{item.space}</p>
                <img src={item.img} alt = 'Building' height ='300' width ='500' className ='img'></img>
            </div>
        ))}
    </div>
  );
}

export default Details;