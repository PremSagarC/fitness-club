import React from 'react'
import './Reasons.css'
import image from '../../assets/image2.png'

// Importing sponsers
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
        <div className="left">
            <img src={image} alt="" />
        </div>

        <div className="right">
            <span>some reasons</span>

            <div className='question'>
                <span className='stroke-text'>Why </span>
                <span>to chose us?</span>
            </div>

            <div className='details'>
                <div>
                    <img src={tick} alt="" />
                    <span>over 140+ trainers</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>Train smarter and faster</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>1 free program for new member</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>reliable partners</span>
                </div>
            </div>
        </div>
        <div className='partners'>
                <span>Our partners</span>
                <div className="images">
                    <img src={nb} alt="" />
                    <img src={adidas} alt="" />
                    <img src={nike} alt="" />
                </div>
        </div>
    </div>
  )
}

export default Reasons
