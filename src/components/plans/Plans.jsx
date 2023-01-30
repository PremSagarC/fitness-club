import React from 'react'
import './Plans.css'
import {plansData}from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className='plans-container' id='Plan'>
        <div className="blur blur-plans"></div>
        <div className="programs-header">
            <p>
                <span className='stroke-text'>Ready to </span>
                start
                <span className='stroke-text'> your journey</span>
            </p>
        </div>


        {/* Plans Card */}
        <div className="plans-card">
            {plansData.map((plan, i)=>(
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>${plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature, i)=>(
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div>
                        <span>See more benefits -> </span>
                    </div>
                    <button className='btn'>
                        Join Now
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans