import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
// import Gallery from "./components/Gallery/Gallery";
import AboutUs from "./components/About/AboutUs";
import ContactUs from "./components/Contact/ContactUs";
import Notification from "./components/Notification/Notification";
import VisionMission from "./components/VisionMission/VisionMission";
import Headline from "./components/Header/Headline";
import Donate from "./components/Registration/Donate";
import VolunteerRegistration from "./components/Registration/VolunteerRegistration";
import CoreTeam from "./components/Team/CoreTeam";
import CoreProfileCard from "./components/Team/CoreProfileCard";
import Developer from "./components/Developer/Developer";

const App = () => {
  return (
    <>
      <Router>
        <Headline />
        <Header />
        <Notification />
        <RoutesWithTitles />
        <Footer />
      </Router>
    </>
  );
};

const RoutesWithTitles = () => {
  const location = useLocation();

  useEffect(() => {
    updateTitle(getPageName(location.pathname));
  }, [location]);

  const getPageName = (pathname) => {
    // Extract the page name from the pathname
    const pathParts = pathname.split("/");
    const pageName = pathParts[pathParts.length - 1];
    return pageName;
  };

  const updateTitle = (pageName) => {
    document.title = `${pageName} | Unity of Youth`;
  };

  return (
    <Routes>
      <Route  path="/" element={<Homepage />} />
      <Route  path="/AboutUs" element={<AboutUs />} />
      <Route  path="/ContactUs" element={<ContactUs />} />
      <Route  path="/VisionMission" element={<VisionMission />} />
      <Route  path="/Donate" element={<Donate />} />
      <Route  path="/VolunteerRegistration" element={<VolunteerRegistration />} />
      <Route  path="/Developer" element={<Developer />} />
      <Route  path="/CoreTeam" element={<CoreTeam />} />
      <Route  path="/CoreProfileCard" element={<CoreProfileCard />} />
    </Routes>
  );
};

export default App;
