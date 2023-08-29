import React from "react";

import "../scss/components/section.scss";
import "../scss/components/box.scss";
import Slider from "../components/slider";
import dataSlider from "../assets/fake-data/data-slider";
// import About from '../features/about';
import dataAbout from "../assets/fake-data/data-about";
import dataRoadmap from "../assets/fake-data/data-roadmap";
import RoadMap from "../features/roadmap";
import Work from "../features/work";
import dataWork from "../assets/fake-data/data-work";
import FAQ from "../features/faq";
import dataFaq from "../assets/fake-data/data-faq";

function HomeOne(props) {
  const isMobileView = window.innerWidth <= 768;

  return (
    <div className="page-roadmap">
      <Slider data={dataSlider} />
      {/* <About data={dataAbout} /> */}
      {!isMobileView && <RoadMap data={dataRoadmap} />}
      <Work data={dataWork} />
      <FAQ data={dataFaq} />
    </div>
  );
}

export default HomeOne;
