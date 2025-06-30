import React from 'react'
import Navbar from './Navbar'
import { Cake, Calendar, Clock, Donut, Locate, MessageCircle, Phone, RemoveFormatting, Save, Star, Timer } from 'lucide-react'
import Reviews from './Reviews'
import WriteReview from './WriteReview'

function MentorDetail() {
  return (
    <div className='w-full h-screen flex flex-col pb-7'>
      <Navbar></Navbar>
      <div className='w-full h-full flex flex-col items-center mb-6'>
        <div className='w-full h-[50%] shrink-0'>
          <div className='w-full h-[35%] bg-teal-500'></div>
          <div className='w-full h-[100%] flex items-center justify-around border-b-2 border-teal-500'>
            <div className='w-[24%] h-[470px]   rounded-2xl p-2 flex justify-start flex-col items-start gap-3 mb-20'>
              <div className='w-full h-fit flex justify-start gap-3 items-center'>
                <img src='\assets\Screenshot 2025-05-22 024446.png' width={150}></img>
                <div className='flex p-2 gap-4 bg-gray-200 text-md rounded-2xl items-center'>
                  <Star size={16}></Star>
                  <div>Mentor</div>
                </div>
              </div>
              <div>
                <div className='text-lg  font-semibold'>Abhishek Jakhar</div>
               <div className='text-lg font-medium'>Founder @ FrontPrep</div>
              </div>
              <div className='w-full h-[30%] text-md flex flex-col justify-evenly'>
                <div>https://www.frontprep.com/user-interface</div>
                <div className='flex flex-col gap-1'>
                  <div className='flex gap-2 items-center'>
                    <Locate size={16}  color='teal'></Locate>
                    <div>India</div>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <RemoveFormatting size={16} color='teal'></RemoveFormatting>
                    <div>5.0 (79 reviews)</div>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <Timer size={16} color='teal'></Timer>
                    <div>Active yesterday</div>
                  </div>
                   <div className='flex gap-2 items-center'>
                    <Calendar size={16} color='teal'></Calendar>
                    <div>Usually responds in half a day</div>
                  </div>
                </div>
                <div className='flex gap-2 items-center mt-1 p-2 bg-gray-200 w-fit rounded-2xl pr-5'>
                    <Save size={16} color='teal'></Save>
                    <div>Save</div>
                  </div>
              </div>
              
            </div>
            <div className='w-[24%] rounded-2xl h-[420px] border-1 flex flex-col gap-4 bg-white items-center mb-8'>
              <div className='flex w-full h-fit mt-5'>
                <div className='w-[50%] h-fit p-2 text-lg border-b-4 border-teal-500 text-teal-300 font-semibold text-center'>Mentorship Plans</div>
                <div className='w-[50%] h-fit p-2 text-lg border-b-4 border-gray-500 text-teal-300 font-semibold text-center'>Standard Plan</div>
              </div>
              <div className='w-[80%] flex flex-col gap-2'>
                 <div className='flex w-full h-fit rounded-lg border-1'>
                <div className='w-[50%] h-fit p-2 text-lg  text-teal-400 font-semibold text-center border-r-1'>Lite Plan</div>
                <div className='w-[50%] h-fit p-2 text-lg  text-teal-400 font-semibold text-center border-l-1'>Standard Plan</div>
              </div>
              <div className='text-2xl font-bold'>$250/  month</div>
              <div className='text-sm'>video calls, pair programming, code reviews, interview practice & unlimited chat on slac</div>
              <div className='flex flex-col gap-1'>
                  <div className='flex gap-2 items-center'>
                    <Phone size={16}  color='teal'></Phone>
                    <div>4 calls per month (60min/call)</div>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <MessageCircle size={16} color='teal'></MessageCircle>
                    <div>Unlimited Q&A via chat</div>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <Clock size={16} color='teal'></Clock>
                    <div>Expect responses in 24 hours or less</div>
                  </div>
                   <div className='flex gap-2 items-center'>
                    <Cake size={16} color='teal'></Cake>
                    <div>Hands-on support</div>
                  </div>
                </div>
                <div className='p-3 w-full rounded-2xl bg-teal-500 text-center'>
                  Book an intro call
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-[50%] border-b-2 border-teal-500 mt-30 shrink-0 pl-30  flex flex-col items-start justify-evenly'>
          <div className='text-3xl font-semibold mt-8'>About</div>
          <div className='w-full h-[40%] flex flex-col justify-around'>
             <div className='w-[70%]'>
            Hello! I'm a passionate Frontend Engineer with a deep love for mentoring engineers and guiding them through their professional journeys. With extensive experience in front-end frameworks like React and Next.js, I enjoy sharing my knowledge and helping others excel in their careers
          </div>
          <div>
            User Interface:<a href='https://www.frontprep.com/user-interfaceJavaScript'>https://www.frontprep.com/user-interfaceJavaScript </a>
          </div>
          <div>
            User Interface:<a href='https://www.frontprep.com/user-interfaceJavaScript'>https://www.frontprep.com/user-interfaceJavaScript </a>
          </div>
          <div>
            User Interface:<a href='https://www.frontprep.com/user-interfaceJavaScript'>https://www.frontprep.com/user-interfaceJavaScript </a>
          </div>
          </div>
          <div className='w-[70%] bg-teal-200 o h-[80px] flex justify-around items-center rounded-xl'>
            <div className='w-[70%] h-full flex flex-col  p-3 '>
              <div className='flex gap-4 items-center'>
                <Donut size={24} color='teal'></Donut>
                <div className='text-xl text-teal-600 font-semibold'>Open to inquires</div>
              </div>
              <div className='text-lg text-gray-600 font-normal'>you can message abhishek before booking his services</div>
            </div>
            <div className='w-[20%] h-full flex items-center justify-center'>
              <div className='w-[150px]  h-[40px] bg-gray-100 rounded-lg  text-xl text-center flex items-center justify-center text-teal-600 font border-2'>
                Get in Touch
              </div>
            </div>
          </div>
        </div>
        <div className='h-[50%] flex flex-col  justify-around w-full pl-30'>
          <div className='flex w-[45%] justify-between mt-6'>
            <div className='text-3xl font-bold'>What mentees say</div>
            <div className='text-xl font-semibold'>Sort by: Recommended</div>
          </div>
          <div className='flex gap-10 items-start pb-10'>
            <div className='overflow-y-auto flex flex-col gap-3 overflow-x-hidden h-[400px]'>
              <Reviews></Reviews>
              <Reviews></Reviews>
            </div>
             <WriteReview></WriteReview>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MentorDetail