import React from 'react'
import gif from '../assets/This Moment Is Your Life — Libby VanderPloeg.gif'

const Contact = () => {
  return (
    <div>
        <section
   className="relative bg-gray-200 w-full mt-4 ">
 
   <div className="w-10/12 max-w-[1080px] flex sm:flex-col lg:flex-row justify-between items-center mx-auto py-8 ">
       <div className="space-y-2 ">
           <div clclassNameass="flex felx-col gap-10 mx-auto"> 
           <p className="text-center relative left-[450px] text-[30px] font-bold leading-[1.2] text-black">CONTACT US</p>
           </div>   
       </div>
   </div>
 
    </section>

        <div className="flex  sm:flex-col lg:flex-row justify-between items-center  ">
        {/* <!--right part--> */}
       <img src={gif} alt=""
       className="w-full max-w-[580px] relative ml-14 rounded-md"/>

       {/* <!--left part--> */}
       <div className="space-y-2 ml-8">
           <h1 className="font-mullish font-bold text-[40px] leading-[1.2] text-black">Join Our Community</h1>
           <div className="">
            <p className="font-mullish text-[18px] leading-7 text-black opacity-70 ">
            We invite you to join our growing community of individuals who share our passion for Ayurveda. Whether you're a seasoned Ayurvedic practitioner seeking efficient tools or someone new to this holistic approach, we welcome you with open arms. Together, let's explore the boundless potential of Ayurvedic healthcare and embark on a journey towards a healthier, happier, and more balanced life.
           </p>
    
          </div>
        </div>
           
       </div>
    </div>
  )
}

export default Contact