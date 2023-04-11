import React from 'react'
// import ParticlesBg from 'particles-bg';
export const Nav = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        {/* <ParticlesBg type='lines' bg={{
          position: "absolute",
          zIndex: -999,
          height: 1200
        }} /> */}
        <p onClick={() => onRouteChange('signout')} className='f3 link dim white underline pa3 pointer'>Log Out</p>
      </nav>)
  } else {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p onClick={() => onRouteChange('signin')} className="f3 link dim underline pa3 pointer text-white">Sign In</p>
        <p onClick={() => onRouteChange('register')} className="f3 link dim underline pa3 pointer text-white">Register</p>
      </nav>
    )
  }
}