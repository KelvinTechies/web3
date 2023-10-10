import { useState } from 'react'
import { NavBar, Welcome, Services, Trasactions, Loader, Footer } from './Components' 
const App =()=> {

  return (
    <div className=''>
       <div className="">
          <div className="">
              <NavBar />
              <Welcome />
          </div>
       </div>
    </div>
  )
}

export default App
