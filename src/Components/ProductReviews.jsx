import React from 'react'
import "../Styles/ProductReviews.css"

const ProductReviews = ({productReviews}) => {
  return (
    <>
    <div className="ProductReviews">
       {
        productReviews.map((item , index)=>(
          <div className="ProductReviewCard" key={index}>
            <img src={item.image} alt={`${index} review`} />
            <h5>{item.review}</h5>
            <span>{item.name}</span>
            <b>{item.price}</b>
          </div>
        ))
       }
    </div>
    </>
  )
}

export default ProductReviews