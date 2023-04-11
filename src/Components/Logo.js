import React from 'react'
import Tilt from 'react-parallax-tilt'
import logo from './logo192.png';
import './logo.css'

export const Logo = () => {
  return (
    <div className='ma4 mt0'>
        <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner"><img className='o-80' alt="" src={logo} style={{paddingTop:'30px'}}></img> </div>
        </Tilt>
    </div>
  )
}
