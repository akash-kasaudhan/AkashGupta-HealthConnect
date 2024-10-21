import React from 'react'

import bg from '../assets/herbs.jpg'
import leftimg from '../assets/High Five transition for the latest project.gif'
import rightimg from '../assets/back-left-4.jpeg'
import ChatBox from '../components/ChatBox'

import gif from '../assets/Deep Breathing Animation.gif'

import {Link} from "react-router-dom"


const Home = ({isLoggedIn}) => {
  return (
    
    <div>

        <div className="relative ml-72">   
            <img src={bg} className='w-[900px]' />
            <div className='absolute  '>
              <h1 className='text-black font-serif font-bold text-[40px] left-[10px] top-[-550px] relative'>Unlock the Power of Telemedicine Wisdom</h1>
              <br></br>
              <h1 className='text-black text-center font-bold text-[25px] left-[10px] top-[-550px] relative'>Your Personalized Ayurvedic Healthcare Companion</h1>
              <Link to="https://ayurtech.streamlit.app/" target='_blank'>
                    <button className=' bg-richblack-800 text-white text-bold py-[10px] 
                    px-[18px] rounded-[8px] border border-richblack-700 relative top-[-500px] left-[150px]'>
                        Browse Herbs
                    </button>
            </Link>
            <Link to="https://sehat-commitandpush.netlify.app" target='_blank'>
                    <button className=' bg-richblack-800 text-white text-bold py-[10px] 
                    px-[18px] rounded-[8px] border border-richblack-700 relative top-[-500px] left-[200px]'>
                        Get Your Checkup Done
                    </button>
            </Link>
            
            <Link to="https://sfu.mirotalk.com/join/70797BrownGhost" target='_blank'>
                    <button className='mx-2 bg-richblack-800 text-white text-bold py-[10px] 
                    px-[18px] rounded-[8px] border border-richblack-700 relative top-[-500px] left-[250px]'>
                        Create Meeting
                    </button>
            </Link>
            </div>
        </div>

       

      <div className="flex  sm:flex-col lg:flex-row justify-between items-center py-14 ">
       {/* <!--left part--> */}
       <div className="space-y-2 ml-14">
           <h1 className="font-mullish font-bold text-[40px] leading-[1.2] text-black">Get Started Today</h1>
           <div className="">
            <p className="font-mullish text-[22px] leading-7 text-black opacity-70 ">
            "Jivan Buti" is dedicated to revolutionizing healthcare accessibility for remote and underserved communities through innovative telemedicine solutions. Our mission is to bridge the gap in healthcare delivery by leveraging cutting-edge technology to provide timely medical consultations and diagnoses, reducing the need for physical travel to healthcare facilities.
           </p>
           <br/>
           <p className="font-mullish text-[22px] leading-7 text-black opacity-70 ">
            Are you tired of navigating through numerous Ayurvedic texts and sifting through complex terminology? With our software, you can leave the cumbersome research to us. We've combined the power of Natural Language Processing (NLP) and machine learning to make Ayurveda accessible and practical. No more confusion, just clarity in your healthcare decisions.
           </p>
          </div>
        </div>
        {/* <!--right part--> */}
       <img src={gif} alt=""
       className="w-full max-w-[550px] relative mr-14 rounded-full"/>
           
       </div>

       

       <section
   className="relative bg-gray-300 w-full mt-10 ">
 
   <div className="w-10/12 max-w-[1080px] flex sm:flex-col lg:flex-row justify-between items-center mx-auto py-16 ">
       <div className="space-y-8 ">

           <div clclassNameass="flex felx-col gap-10 mx-auto"> 
           <p className="font-mullish font-semibold text-[30px] leading-[1.2] text-black">Ayurveda is not just about treating diseases; it is about creating harmony in body, mind, and spirit." - Dr Vasant Lad</p>
           
           </div>   
       </div>
   </div>
 
        </section>

       <div className="flex  sm:flex-col lg:flex-row justify-between items-center py-20 ">
        {/* <!--right part--> */}
       <img src={rightimg} alt=""
       className="w-full max-w-[580px] relative ml-14 rounded-full"/>

       {/* <!--left part--> */}
       <div className="space-y-2 ml-8">
           <h1 className="font-mullish font-bold text-[40px] leading-[1.2] text-black">How It Works?</h1>
           <div className="">
            <p className="font-mullish text-[22px] leading-7 text-black opacity-70 ">
            Our Ayurvedic Formulation Recommendation Software is a sophisticated blend of ancient wisdom and state-of-the-art technology, meticulously designed to simplify your journey to optimal health. The process commences with user authentication, ensuring a secure and trusted environment for your health exploration. Next, you input comprehensive patient information, including your psychosomatic constitution, age, clinical condition, comorbidities, and symptoms. This data forms the basis for our personalized recommendations. The culmination of this process is the presentation of carefully curated Ayurvedic formulations designed to meet your wellness needs. But our commitment to empowering you with knowledge doesn't end there. 
           </p>
    
          </div>
        </div>
           
       </div>

       <div className='relative bg-green-800'>
            <div class="w-10/12 max-w-[1080px] flex sm:flex-col lg:flex-row justify-between items-center mx-auto py-16 ">
        
            <p class="text-white text-center text-sm"><span class="text-[55px] font-bold text-white">80%+</span> <br/> reduction in average <br/>
                time to first response </p>
            <p class="text-white text-center text-sm"><span class="text-[55px] font-bold text-white">1,002%</span> <br/>increase in total social<br/>
                engagements</p>
            <p class="text-white text-center text-sm"><span class="text-[55px] font-bold text-white">2X</span> <br/> increase in average <br/>
                    client retainer</p>
            </div>
       </div>

       <div className="flex  sm:flex-col lg:flex-row justify-between items-center py-20 ">
       {/* <!--left part--> */}
       <div className="space-y-2 ml-12">
           <h1 className="font-mullish font-bold text-[40px] leading-[1.2] text-black">Why Choose Us</h1>
           <div className="">
            <p className="font-mullish text-[22px] leading-7 text-black opacity-70 ">
            Our software understands that no two individuals are the same. Your health journey is unique, and we respect that. When you get started, you'll have the opportunity to input your specific details, from your psychosomatic constitution to your age, clinical condition, and symptoms. This information forms the foundation of your personalized recommendations.
           </p>
          </div>
        </div>
        {/* <!--right part--> */}
       <img src={leftimg} alt=""
       className="w-full max-w-[450px] relative mr-12 rounded-full"/>
           
       </div>


       
       <section
   className="relative bg-gray-300 w-full mt-6 ">
 
   <div className="w-10/12 max-w-[1080px] flex sm:flex-col lg:flex-row justify-between items-center mx-auto py-16 ">
       <div className="space-y-8 ">

           <div clclassNameass="flex felx-col gap-10 mx-auto"> 
           <p className="font-mullish font-semibold text-[30px] leading-[1.2] text-black">Ayurveda is not just about treating diseases; it is about creating harmony in body, mind, and spirit." - Dr Vasant Lad</p>
           
           </div>   
       </div>
   </div>
   
 
        </section>
        <h1 className="font-mullish font-bold text-[40px] leading-[1.2] text-black m-4 relative left-[600px]">Customized Chat Bot</h1>
        <ChatBox/>
    </div>


  )
}

export default Home
