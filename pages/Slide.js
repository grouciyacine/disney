import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Style from '../styles/Slides.module.scss'
import Image1 from '../public/images/slider-badag.jpg'
import Image2 from '../public/images/slider-badging.jpg'
import Image3 from '../public/images/slider-scale.jpg'
import Image4 from '../public/images/slider-scales.jpg'
import Image from 'next/image'
const Slide = () => {
    let setting={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slideToScroll:1,
        autoplay:true,
    }
  return (
    
    <Slider className={Style.slide} {...setting} >
<a className={Style.bor}>
<Image className={Style.img} src={Image1} alt='good'/>
</a>
<a className={Style.bor}>
<Image className={Style.img} src={Image2} alt='good'/>
</a>
<a className={Style.bor}>
<Image className={Style.img} src={Image3} alt='good'/>
</a>
<a className={Style.bor}>
<Image className={Style.img} src={Image4} alt='good'/>
</a>
    </Slider>
  )
}
//2h:41m
export default Slide