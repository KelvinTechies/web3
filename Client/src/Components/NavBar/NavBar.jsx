import React, { useState } from 'react'
import './Navbar.css'
// import { HiMenuAlt4} from 'react-icons/h1'
import {AiOutlineClose} from 'react-icons/ai'
import {UilApps} from '@iconscout/react-unicons'


function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='navBar'>
      NavBar
      <div className="ul">
        <li>market</li>
        <li>Exchange</li>
        <li>Tutorials</li>
        <li>Wallets</li>
        <li className='login'>Login</li>
      </div>

      {toggleMenu ? <AiOutlineClose  fontSize={28} onClick={()=>setToggleMenu(false)}/>:
      <UilApps fontSize={28} onClick={()=>setToggleMenu(true)} />}

      {toggleMenu && (
        <ul>
          <li>
          <AiOutlineClose onClick={(()=>setToggleMenu(false))} />

          </li>
          <div className="ul_mob">
        <li>market</li>
        <li>Exchange</li>
        <li>Tutorials</li>
        <li>Wallets</li>
        <li className='login'>Login</li>
      </div>
        </ul>
      
      )}
    </div>
  )
}

export default NavBar
