import React from 'react'
import leftimg from '../assets/back-left2.jpg'
import rightimg from '../assets/back-left-4.jpeg'
import backleft from '../assets/Inner Peace Meditation GIF.gif'
import gif from '../assets/Intercom Live Chat.gif'
import gif2 from '../assets/Searching.gif'

import { RiSlideshow4Line } from 'react-icons/ri';
import { BiShareAlt, BiAddToQueue } from 'react-icons/bi';
import { FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './home.css';

import { IoAddSharp, IoLogoRss } from 'react-icons/io5';
import { MdManageSearch } from 'react-icons/md';
import { FaDiscord } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';


const About = () => {

  return (
    <div>

<section
   className="relative bg-gray-200 w-full mt-4 ">
 
   <div className="w-10/12 max-w-[1080px] flex sm:flex-col lg:flex-row justify-between items-center mx-auto py-8 ">
       <div className="space-y-2 ">
           <div clclassNameass="flex felx-col gap-10 mx-auto"> 
           <p className="text-center relative left-[450px] text-[30px] font-bold leading-[1.2] text-black">ABOUT US</p>
           </div>   
       </div>
   </div>


  </section>

      {/* <button
            className="home-anchor home-anchor-sm"
            href="#"
            onClick={() => setShowShareModal(!showShareModal)}
          >
            <span className="text">Share about ReactPlay</span>
          </button>
         */}
      <div className="flex  sm:flex-col lg:flex-row justify-between items-center py-8 ">
       {/* <!--left part--> */}
       <div className="space-y-2 ml-14">
           <h1 className="font-mullish font-bold text-[40px] leading-[1.2] text-black">Why JivanButi </h1>
           <div className="">
            <p className="font-mullish text-[18px] leading-7 text-black opacity-70 ">
            Buti is revolutionizing healthcare access through telemedicine technology. Our platform offers convenient virtual consultations, eliminating geographical barriers and reducing the costs associated with traditional healthcare visits. With a focus on quality care, privacy, and security, Sehat connects users with experienced healthcare providers who deliver personalized medical advice and treatment recommendations. Our innovative approach empowers individuals to take control of their health journey while making a positive impact on underserved communities. Join us in creating a healthier, more connected world with TeleMediConnect.

           </p>
           
          </div>
        </div>
        {/* <!--right part--> */}
       <img src={gif} alt=""
       className="w-full max-w-[580px] relative mr-14"/>
           
       </div>

     <div className="flex  sm:flex-col lg:flex-row justify-between items-center py-10 ">
        {/* <!--right part--> */}
       <img src={gif2} alt=""
       className="w-full max-w-[580px] relative ml-14 rounded-full"/>

       {/* <!--left part--> */}
       <div className="space-y-2 ml-8">
           <h1 className="font-mullish font-bold text-[40px] leading-[1.2] text-black">Our Mission</h1>
           <div className="">
            <p className="font-mullish text-[18px] leading-7 text-black opacity-70 ">
            At Jivan Buti, we're committed to democratizing healthcare by making quality medical services accessible to all. Through innovative telemedicine solutions, we bridge gaps in healthcare delivery, especially in underserved areas. Our goal is to empower individuals to take control of their health journey and receive timely consultations from experienced professionals, ensuring a healthier, more equitable world for everyone.
           </p>
    
          </div>
        </div>
           
       </div>

      

       <div className="flex  sm:flex-col lg:flex-row justify-between items-center py-5 ">
       {/* <!--left part--> */}
       <div className="space-y-2 ml-12">
           <h1 className="font-mullish font-bold text-[40px] leading-[1.2] text-black">The Power of Technology and Tradition</h1>
           <div className="">
            <p className="font-mullish text-[18px] leading-7 text-black opacity-70 ">
              At Jivan Buti, we recognize the strength that comes from blending the latest in technology with time-honored traditions in healthcare. By harnessing the power of telemedicine, we honor the wisdom of traditional healthcare practices while leveraging modern innovations to enhance accessibility and quality of care. Our approach seamlessly integrates the benefits of both worlds, ensuring that individuals receive the best possible medical attention while respecting their cultural heritage and values. Through this fusion, we empower communities to embrace the future of healthcare while preserving the richness of their traditions.
           </p>
          </div>
        </div>
        {/* <!--right part--> */}
       <img src={backleft} alt=""
       className="w-full max-w-[450px] relative mr-12 rounded-full"/>
           
       </div>

       
       
       
    </div>
  )
}

export default About
