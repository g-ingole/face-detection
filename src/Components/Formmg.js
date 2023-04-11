import React from 'react'
import './formmg.css'
const Formmg = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='white'>{'THIS AI WILL DETECT THE FACES FROM YOUR IMAGE'}</p>
    <div className='form pa4 br3 shadow-5 center w-50 '>
      <input type= "Text" className='f4 pa2 w-40 center br4' style={{height:'31px'}} onChange={onInputChange}></input>
      <button className='w4 dib bg-light br4' style={{height:'50px'}} onClick={onButtonSubmit}>Detect</button>
    </div>
    </div>

  )
}
export default Formmg;
