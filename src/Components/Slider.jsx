import React from 'react'
import { Carousel } from 'react-bootstrap'

const Slider = ({ start }) => {
    return (
        <>
            <Carousel fade>

                {start.map((item , index) => (
                    <Carousel.Item key={index}>
                        <img src={item} className="d-block w-100" alt="..." />
                    </Carousel.Item>
                ))}

            </Carousel>

        </>
    )
}

export default Slider