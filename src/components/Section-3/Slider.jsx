import React from 'react'
import "./Slider.css"
import sofa from "./assets/sofa.png"
const Slider = () => {
  return (
    <>
     <div className='right_light_banner'>
<div className='wallpaper_section_content'>
    <div className='main_heading'>
    The right light can turn a house<br/> into your own home.
    </div>
    <div className='explore_button'>
        <button>Explore</button>
    </div>
</div>
<div className='sofa_section_wrap'>
    <div className='sofa_bx text-center'>
        <img src={sofa}/>
        <p>25%</p>
    </div>
    <div className='sofa_bx text-center'>
        <img src={sofa}/>
        <p>50%</p>
    </div>
    <div className='sofa_bx text-center'>
        <img src={sofa}/>
        <p>75%</p>
    </div>
    <div className='sofa_bx text-center'>
        <img src={sofa}/>
        <p>100%</p>
    </div>
</div>
    </div>
    </>
  )
}

export default Slider
