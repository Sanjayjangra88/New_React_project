import React from 'react'
import '../Components/header.css'

function Header() {
  return (
    <div>
        <header class="header">
  <div className="container">
    <div className="row"style={{height:"4rem"}}>
      <div className="col-12 col-md-6 d-flex justify-content-between">
        <div className='logo'>
            <img src='	https://verdant-biscuit-f278ad.netlify.app/Vectorlogo.ea2d63f5.png'></img>
            <h1 className="logos">StarClinch</h1>
        </div>
        
        <h6 className="username">Hello, manish</h6>
      </div>
     
    </div>
  </div>
</header>
    </div>
  )
}

export default Header