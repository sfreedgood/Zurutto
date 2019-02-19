import React from "react"
import './Splash.css'
import SplashImg from './splash.png'
import arrow from './arrow.png'

const Splash = () => {


    return(
        <div className="splash">
            <img src={SplashImg} className='splash-img' />
            <img src={arrow} className='scroll-arrow' />
        </div>
    )
}

export default Splash