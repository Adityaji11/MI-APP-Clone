import React from 'react'
import "../Styles/HotItemCard.css"

const HotItemCard = ({name , price ,image}) => {
  return (
    <>
    <div className="HotItemCard">
        <img src={image} alt="" />
        <p>{name}</p>
        <span>{price}</span>
    </div>
    </>
  )
}

export default HotItemCard