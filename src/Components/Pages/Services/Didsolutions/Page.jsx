import React from 'react'

import Didheader from '../../../Didheader'
import Didcontent1 from '../../../Didcontent1'
import Didanimation from '../../../Didanimation'
import Didcontent2 from '../../../Didcontent2'
import Becomepartner from '../../../Becomepartner'; 
import HomeAchievement from '../../../Homeacheivemnet'
import Footer from '../../../Footer'
import Register from '../../../Register'

const Page = () => {
  return (
    <div>
      <Didheader/>
      <Becomepartner/>
      <Didcontent1/>
      <Didanimation/>
      <Didcontent2/>
      <HomeAchievement/>
      <Register/>
     <Footer/>
    </div>
  )
}

export default Page