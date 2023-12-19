import React from 'react'
import { Carousel } from 'react-bootstrap'

const Banner = ({banner}) => {
  return (
    <>
    <Carousel>
        {banner.end.map((item , index)=>(
            <Carousel.Item  key={index}>
                <img className="d-block w-100 " id="bannerImage" interval={1000} src={item.image} alt="" />
                <Carousel.Caption>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>{item.source}</p>
                    <u>Read more</u>
                </Carousel.Caption>
            </Carousel.Item>
        ))}
    </Carousel>
    
    </>
  )
}

export default Banner