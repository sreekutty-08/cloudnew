import React from 'react'
import Hostingheader from '../../../Hostingheader'
import Servercontent1 from '../../../Servercontent1'
import Serveranimation from '../../../Serveranimation'
import Servercontent2 from '../../../Servercontent2'
import Becomepartner from '../../../Becomepartner'; 
import HomeAchievement from '../../../Homeacheivemnet'
import Register from '../../../Register'
import Footer from '../../../Footer'

const Page = () => {
  return (
    <div>
      <Hostingheader/>
      <Becomepartner/>
      <Servercontent1/>
      <Serveranimation/>
      <Servercontent2/>
      <HomeAchievement/>
      <Register/>
      <Footer/>
    </div>
  )
}

export default Page