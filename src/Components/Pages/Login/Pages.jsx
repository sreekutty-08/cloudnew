import React from 'react'
import Footer from '../../Footer'
import Loginpagemain from '../../Loginpagemain'

import Loginheader from '../../Loginheader'
import Register from '../../Register'


const Pages = () => {
  return (
    <div>
      {/* <Loginheader/> */}
      <Loginheader/>
    
  
      <Loginpagemain/>
      <Register/>
      
      <Footer/>
    </div>
  )
}

export default Pages