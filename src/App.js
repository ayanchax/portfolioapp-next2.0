import React, { useEffect, useState } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Career from "./Components/Career";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Blogs from "./Components/Blogs";
import Portfolio from "./Components/Portfolio";

import "./App.css";
import HelmetMetaData from "./HelmetMetaData";

const App = () => {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  return (
    <div className="App">
      <HelmetMetaData />
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Career data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Testimonials data={resumeData.testimonials} />
      <Blogs data={resumeData.blogger} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  );
};

export default App;
