import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepages from "./Components/Pages/Home/pages";
import Aboutpages from "./Components/Pages/About/pages";
import Contactpages from "./Components/Pages/contact/pages";
import Ratepages from "./Components/Pages/Rates/pages";
import Faqpages from "./Components/Pages/FAQ/pages";
import Loginpages from "./Components/Pages/Login/Pages.jsx";
import Specialrate from "./Components/Specialrate";
import Socialmediaicons from "./Components/Socialmediaicons";
import Registerpages from "./Components/Pages/Register/Pages.jsx"

// Service Pages
import CcRoutes from "./Components/Pages/Services/Ccroutes/Page";
import CliVoice from "./Components/Pages/Services/Clivoiceterminations/Page.jsx";
import DialerSolutions from "./Components/Pages/Services/Dialersolutions/Page";
import DidSolutions from "./Components/Pages/Services/Didsolutions/Page";
import ServerHosting from "./Components/Pages/Services/Serverhosting/Page";
import VoipWebsites from "./Components/Pages/Services/Voipwebsites/Page";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/about" element={<Aboutpages />} />
        <Route path="/contact" element={<Contactpages />} />
        <Route path="/rates" element={<Ratepages />} />
        <Route path="/faq" element={<Faqpages />} />
         <Route path="/login" element={<Loginpages />} />
         <Route path="/register" element={<Registerpages/>} />
       
     
          

        {/* Service Pages */}
        <Route path="/cc-routes" element={<CcRoutes />} />
        <Route path="/cli-voice" element={<CliVoice />} />
        <Route path="/dialer-solutions" element={<DialerSolutions />} />
        <Route path="/did-solutions" element={<DidSolutions />} />
        <Route path="/server-hosting" element={<ServerHosting />} />
        <Route path="/voip-websites" element={<VoipWebsites />} />
      </Routes>

      <Specialrate />
      <Socialmediaicons />
    </Router>
  );
}

export default App;
