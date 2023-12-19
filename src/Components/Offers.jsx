import React from 'react'
import "../Styles/Offers.css"

const Offers = ({offer}) => {
  return (
    <>
    <div className="offersSection">
        {offer.map((item , index)=>(
            <a key={index} href={item.url}> <img src={item.image} alt={`${index} offer`} /></a>
        ))}
    </div>
    </>
  )
}

export default Offers