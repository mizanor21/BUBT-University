import React from "react";
import Banner from "../Banner/Banner";
import Admission from "../Admission/Admission";
import VideoInfo from "../VideoSection/VideoInfo";
import Notice from "../TabNoticeProgramsEvent/TabNoticeProgramsEvent";
import Alumni from "../Alumni/Alumni";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Admission></Admission>
      <VideoInfo></VideoInfo>
      <Notice></Notice>
      <Alumni></Alumni>
    </div>
  );
};

export default Home;
