import React from 'react';
import Ccheader from '../../../Ccheader';
import Cccontent1 from '../../../Cccontent1';
import Ccanimation from '../../../Ccanimation';
import Cccontent2 from '../../../Cccontent2';
import Becomepartner from '../../../Becomepartner'; // ✅ Fixed path
import HomeAchievement from '../../../Homeacheivemnet';
import Footer from '../../../Footer';
import Register from '../../../Register';

const Page = () => {
  return (
    <div>
      <Ccheader />
      <Becomepartner />
      <Cccontent1 />
      <Ccanimation />
      <Cccontent2 />
      <HomeAchievement/>
      <Register/>
      <Footer/>
    </div>
  );
};

export default Page;
