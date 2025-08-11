import React from 'react'
import Voipwebsitesheader from '../../../Voipwebsitesheader'
import Voipcontent1 from '../../../Voipcontent1'
import Voipanimation from '../../../Voipanimation'
import Voipcontent2 from '../../../Voipcontent2'
import HomeAchievement from '../../../Homeacheivemnet'
import Register from '../../../Register'
import Footer from '../../../Footer'

const Page = () => {
  return (
    <div>
      <Voipwebsitesheader/>
      <Voipcontent1/>
      <Voipanimation/>
      <Voipcontent2/>
      <HomeAchievement/>
      <Register/>
      <Footer/>
    </div>
  )
}

export default Page