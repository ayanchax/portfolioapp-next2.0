import React, { useEffect, useState, Suspense } from "react";
import "./App.css";
import HelmetMetaData from "./HelmetMetaData";
const Header = React.lazy(() => import("./Components/Header"));
const Footer = React.lazy(() => import("./Components/Footer"));
const About = React.lazy(() => import("./Components/About"));
const Career = React.lazy(() => import("./Components/Career"));
const Contact = React.lazy(() => import("./Components/Contact"));
const Testimonials = React.lazy(() => import("./Components/Testimonials"));
const Blogs = React.lazy(() => import("./Components/Blogs"));
const Portfolio = React.lazy(() => import("./Components/Portfolio"));



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
      <Suspense fallback={<div>Loading...</div>}>
        <Header data={resumeData.main} />
        <About data={resumeData.main} />
        <Career data={resumeData.resume} />
        <Portfolio data={resumeData.portfolio} />
        <Testimonials data={resumeData.testimonials} />
        <Blogs data={resumeData.blogger} />
        <Contact data={resumeData.main} />
        <Footer data={resumeData.main} />
      </Suspense>
    </div>
  );
};

export default App;
