import React from 'react'
import './home.scss'
import Gif from 'assets/images/banner-gif.gif'
import mockupDataDiscount from 'data/mockupDataDiscount'
import mockupDataBestSeller from "data/mockupDataBestSeller";
import mockupDataHot from "data/mockupDataHot";
import {HomepageCarousel} from "components/homepage-carousel/homepage-carousel"

const Homepage = () => {
  console.log(mockupDataDiscount);
  return <div className="homepage">Home Page</div>;
}

export default Homepage;