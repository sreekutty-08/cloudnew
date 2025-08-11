import React from "react";
import Homeheader from "../../Homeheader";
import Homecontent1 from "../../Homecontent1";
import Homescroller from "../../Homescroller";
import Homecontent2 from "../../Homecontent2";
import Homeanimation from "../../Homeanimation";
import Footer from "../../Footer";
import Homeservices from "../../Homeservices";
import Homeacheivemnet from "../../Homeacheivemnet";
import Register from "../../Register";

const Homepages = () => {
  return (
    <div className="bg-white">
        <Homeheader/>
        <Homescroller/>
        <Homeservices/>
        <Homecontent1/>
        <Homeanimation/>
        <Homecontent2/>
        <Homeacheivemnet/>
        <Register/>
     <Footer/>
      
    </div>
  );
};

export default Homepages;
