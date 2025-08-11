import React from 'react'
import Aboutheader from '../../Aboutheader'
import Aboutcontent1 from '../../Aboutcontent1'
import Aboutanimation from '../../Aboutanimation'
import Aboutcontent2 from '../../Aboutcontent2'
import Register from '../../Register'
import Footer from '../../Footer'
import Becomepartner from '../../Becomepartner'
import HomeAchievement from '../../Homeacheivemnet'

const Aboutpages = () => {
  return (
    <div>
        <Aboutheader/>
        <Becomepartner/>
        <Aboutcontent1/>
        <Aboutanimation/>
        <Aboutcontent2/>
        <HomeAchievement/>
        <Register/>
        <Footer/>
    </div>
  )
}

export default Aboutpages