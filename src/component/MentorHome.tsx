import React from 'react';
import Navbar from './Navbar';
import { Camera, Check, CheckCircleIcon, CommandIcon, Dock, Projector, Rocket, Settings, Shield } from 'lucide-react';
import MentorCard from './MentorCard';
import { useNavigate } from 'react-router-dom';
function MentorHome() {
  const navigate=useNavigate()
   const goto=(id:string)=>{
    navigate(`/MentorsDetail/${id}`)
   }
  return (
    <div className="w-screen h-screen overflow-y-auto">
      <Navbar />

      {/* Hero Section */}
      <div
        className="w-full h-[60%] bg-amber-500"
        style={{
          backgroundImage: "url('/assets/pexels-icsa-833425-1708936 1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="h-[70%] w-[80%] flex flex-col justify-end items-start ml-6 gap-4">
          <div className="h-[100px] w-[300px] bg-teal-800 shadow-md shadow-gray-700 rounded-2xl text-center flex items-center justify-center text-white font-medium text-3xl">
            Find Mentor
          </div>
          <div className="h-[100px] w-[300px] bg-teal-800 shadow-md shadow-gray-700 rounded-2xl text-center flex items-center justify-center text-white font-medium text-3xl">
            Become Mentor
          </div>
        </div>
      </div>
      <div className='w-[100%] h-fit  flex justify-evenly items-center mt-1.5'>
        <div className='w-[50%] h-[450px]  flex flex-col gap-5  items-center justify-center'>
          <div className='text-3xl text-teal-400 text-center p-4'>Exclusive Professional Network Access</div>
          <div className='text-xl w-[80%] flex gap-3'>
            <Dock  size={64} color='teal'></Dock>
            Gain instant access to top founders and industry leaders for expert guidance whenever you need it
            </div>
            <div className='text-xl w-[80%] flex gap-3'>
            <Settings size={64} color='teal'></Settings>
            Expand your perspective by working with a dedicated mentor or tapping into insights from multiple advisors.
            </div>
            <div className='text-xl w-[80%] flex gap-3'>
            <Check size={64} color='teal'></Check>
            Learn from proven professionals with a track record of building and scaling successful businesses
            </div>
        </div>
        <img src="public/assets/Mentor_Network_Image_fm0ggw 1.png" width={450} />
      </div>
      <div className='w-[100%] h-fit  flex justify-evenly items-center mt-1.5'>
        <img src="public\assets\b-img 1.png" width={450} />
        <div className='w-[50%] h-[450px]  flex flex-col gap-5  items-center justify-center'>
          <div className='text-3xl text-teal-400 text-center p-4'>Talk face to face on 1:1 video calls</div>
          <div className='text-xl w-[80%] flex gap-3'>
            <Camera  size={64} color='teal'></Camera>
            Connect directly with experts through 1:1 video calls to get timely, personalized advice.
            </div>
            <div className='text-xl w-[80%] flex gap-3'>
            <Projector size={64} color='teal'></Projector>
            Open up about your challenges in a secure, judgment-free space and create a strategy that works for you
            </div>
            <div className='text-xl w-[80%] flex gap-3'>
            <Rocket size={64} color='teal'></Rocket>
           From fundraising and user acquisition to sharpening your sales tactics, guidance is just a conversation away
            </div>
        </div>
      </div>
      <div className='w-[100%] h-fit  flex justify-evenly items-center mt-1.5'>
        <div className='w-[50%] h-[450px]  flex flex-col gap-5  items-center justify-center'>
          <div className='text-3xl text-teal-400 text-center p-4'>Message your Mentor</div>
          <div className='text-xl w-[80%] flex gap-3'>
            <CommandIcon  size={64} color='teal'></CommandIcon>
            Connect effortlessly before and after calls access messages anytime on any device.
            </div>
            <div className='text-xl w-[80%] flex gap-3'>
            <CheckCircleIcon size={48} color='teal'></CheckCircleIcon>
            Share agendas, upload files, and align on key topics with ease.
            </div>
            <div className='text-xl w-[80%] flex gap-3'>
            <Shield size={64} color='teal' fill='teal'></Shield>
             Track milestones and stay organized with all conversations secured on one platform.
            </div>
        </div>
        <img src="public\assets\Message_Mentor_Image_avggpy 1.png" width={450} />
      </div>
      <div className='w-[100%] h-fit bg-teal-200 flex flex-col justify-around items-center gap-11'>
        <div className='text-3xl text-center mt-3'>
          Achieve your goals with the help of a Startup <br/>
          mentor
        </div>
        <div className='text-xl w-[80%] text-center'>
          Reaching new heights is easier when you do so with some help from qualified mentors. Know everything that there is know about one of the fastest-growing languages out there today.
        </div>
        <div className='w-[80%] h-[200px]  flex justify-evenly items-center '>
          <div className='h-fit w-[20%] flex items-center flex-col gap-2'>
            <div className='text-7xl text-teal-600 font-semibold'>97%</div>
            <div className='text-2xl text-center'>Satisfaction</div>
          </div>
                    <div className='h-fit w-[20%] flex items-center flex-col gap-2'>
            <div className='text-7xl text-teal-600 font-semibold'>5x</div>
            <div className='text-2xl text-center'>Sucess Rate</div>
          </div>
                    <div className='h-fit w-[20%] flex items-center flex-col gap-2'>
            <div className='text-7xl text-teal-600 font-semibold'>6K+</div>
            <div className='text-2xl text-center'>Mentors</div>
          </div>
        </div>
      </div>
      <div className='w-[100%] h-fit  flex  items-center mt-1.5 justify-evenly p-3 flex-col gap-6'>
        <div className='text-5xl text-center font-semibold'>How does it work?</div>
        <div className='w-[100%] h-fit  flex  items-center mt-1.5 justify-evenly '>
        <div className='w-[300px] h-[300px] rounded-2xl bg-teal-300 flex flex-col justify-evenly items-center p-2'>
          <img src='public\assets\OIP 2.png' width={120}></img>
          <div className='text-2xl text-center font-semibold'>Sign up</div>
          <div className='text-md text-center w-[90%]'>
            Complete your profile as an mentee or mentor, explain who you are and outline your objectives.
          </div>
        </div>
        <div className='w-[300px] h-[300px] rounded-2xl bg-teal-300 flex flex-col justify-evenly items-center p-2'>
          <img src='public\assets\OIP (2) 1.png' width={120}></img>
          <div className='text-2xl text-center font-semibold'>Search and select</div>
          <div className='text-md text-center w-[90%]'>
            Browse our community to find your ideal mentoring match
          </div>
        </div>
        <div className='w-[300px] h-[300px] rounded-2xl bg-teal-300 flex flex-col justify-evenly items-center p-2'>
          <img src='public\assets\OIP (1) 1.png' width={150}></img>
          <div className='text-2xl text-center font-semibold'>Connect and grow together</div>
          <div className='text-md text-center w-[90%]'>
            Send a compelling message requesting or offering your help.
          </div>
        </div>
        </div>
      </div>
      <div className='text-5xl text-teal-500 text-center mt-2 font-semibold'>Meet Some of Our Inspiring Mentors</div>
      <div className='text-2xl mt-4 text-center'>Discover experienced professionals ready to share their knowledge and guide your journey.</div>
      <div className='w-[100%] h-fit flex items-center justify-center mt-9'>
        <div className='w-[90%] flex flex-col gap-3'>
          <MentorCard 
        img='/assets/Screenshot 2025-05-22 024446 1.png' 
        name='Abhishek JakharIN' 
        tag='Quick Responder'
        details="Hello! I'm a passionate Frontend Engineer with a deep love for mentoring engineers and guiding them through their professional journeys. With extensive experience in front-end frameworks like React and Next.js, I enjoy sharing my knowledge and helpin..."
        amount={250}
        onClick={()=>goto("6")}
        ></MentorCard>
        <MentorCard 
        img='/assets/Screenshot 2025-05-22 024446 1.png' 
        name='Abhishek JakharIN' 
        tag='Quick Responder'
        details="Hello! I'm a passionate Frontend Engineer with a deep love for mentoring engineers and guiding them through their professional journeys. With extensive experience in front-end frameworks like React and Next.js, I enjoy sharing my knowledge and helpin..."
        amount={250}
        onClick={()=>goto("5")}
        ></MentorCard>
        <MentorCard 
        img='/assets/Screenshot 2025-05-22 024446 1.png' 
        name='Abhishek JakharIN' 
        tag='Quick Responder'
        details="Hello! I'm a passionate Frontend Engineer with a deep love for mentoring engineers and guiding them through their professional journeys. With extensive experience in front-end frameworks like React and Next.js, I enjoy sharing my knowledge and helpin..."
        amount={250}
        onClick={()=>goto("4")}
        ></MentorCard>
        </div>
      </div>
      </div>
  );
}

export default MentorHome;