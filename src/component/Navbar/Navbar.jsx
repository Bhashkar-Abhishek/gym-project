import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'


export default function Navbar() {

  return (
    <>
      <div className={style.navDiv}>

        <div className={style.logo}>
        <Link to='/' style={{ textDecoration: 'none' }}> <h1>GYM</h1> </Link>
      </div>

      <div >
        <ul className={style.linkDiv} >

          <Link to='/aboutUs' ><li>About Us</li></Link>
          <Link to='/program' ><li>Program</li></Link>
          <Link to='/training'><li>Training</li></Link>
          <Link to='/pricing'><li>Pricing</li></Link>
          <Link to='/subscription'><li>Subscription</li></Link>
          <Link to='/registration'><li>Registration</li></Link>
        </ul>
        
      </div>

      <div>
      <Link to='/login'> <button>login</button> </Link>

      </div>

    </div >

    </>
  )
}