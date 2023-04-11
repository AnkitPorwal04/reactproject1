import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../Assets/3.jpg"
import img2 from "../Assets/4.jpg"

const Services = () => {
  return (
    <div>

        <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false}>
            
            <div>
                <img src={img1} alt="Item1" />
                <p className='legend'>Full Stack</p>
            </div>

            <div>
                <img src={img2} alt="Item2" />
                <p className='legend'>UI/UX Design</p>
            </div>
            
        </Carousel>
    </div>
  )
}

export default Services