import React from 'react'
import './Footer.css'
import Logo from '../../assets/logo.png'


// importing icon
import Instagram from '../../assets/instagram.png'
import LinkdIN from '../../assets/linkedin.png'
import github from '../../assets/github.png'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='icon-images'>
            <img src={LinkdIN} alt="" />
            <img src={Instagram} alt="" />
            <img src={github} alt="" />
        </div>

        <div className='logo-i'>
            <img src={Logo} alt="" />
        </div>
    </div>
  )
}

export default Footer
