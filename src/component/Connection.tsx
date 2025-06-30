import React from 'react'
import Navbar from './Navbar'
import { ArrowDown, ArrowDownIcon, ArrowDownSquare } from 'lucide-react'

function Connection() {
  return (
    <div className='w-screen h-screen overflow-y-auto flex flex-col gap-4 pb-3'>
      <Navbar></Navbar>  
      <div className='w-full h-fit flex flex-col gap-5 items-center'>
        <div className='text-4xl text-teal-500 font-bold text-center'>Looking Forward to Connection</div>
        <img src='/assets/pexels-icsa-833425-1708936 1.png' className='w-[90%]'></img>
        <div className='text-4xl text-teal-500 font-bold text-center'>Help a Startup, Mentor a Startup, Invest in a Startup</div>
        <div className='text-2xl text-teal-500 font-medium text-center'>For press inquiries, please contact: bountify.connect@gmail.com
                                              +91 74992 36441</div>
         <div className='w-[80%] h-fit p-2 gap-8 flex flex-col'>
            <div className='w-full h-[120px] flex justify-around items-center'>
                <div className='w-[25%] h-full bg-teal-300 rounded-2xl drop-shadow-md drop-shadow-gray-700'>
                    <img src='/assets/Vector.png' className='mt-3'></img>
                </div>
                <div className='w-[25%] h-full bg-teal-300 rounded-2xl drop-shadow-md drop-shadow-gray-700'>
                    <img src='/assets/Vector.png' className='mt-3'></img>
                </div>
                <div className='w-[25%] h-full bg-teal-300 rounded-2xl drop-shadow-md drop-shadow-gray-700'>
                    <img src='/assets/Vector.png' className='mt-3'></img>
                </div>
            </div>
            <div className='w-full h-[120px]  flex justify-around items-center'>
                <div className='w-[25%] h-full bg-teal-300 rounded-2xl drop-shadow-md drop-shadow-gray-700'>
                    <img src='/assets/Vector.png' className='mt-3'></img>
                </div>
                <div className='w-[25%] h-full bg-teal-300 rounded-2xl drop-shadow-md drop-shadow-gray-700'>
                    <img src='/assets/Vector.png' className='mt-3'></img>
                </div>
                <div className='w-[25%] h-full bg-teal-300 rounded-2xl drop-shadow-md drop-shadow-gray-700'>
                    <img src='/assets/Vector.png' className='mt-3'></img>
                </div>
            </div>
            </div>  
            <div className='text-3xl text-teal-500 font-medium text-center'>Frequently Asked Questions</div>  
            <div className='text-2xl text-teal-500 mt-2'>Got questions? You're in the right place! We've gathered the answers to things people ask us most often.</div> 
            <div className='mt-4 w-[80%] h-fit flex flex-col gap-4 items-center'>
                <div className='w-[90%] h-[80px] bg-teal-600 flex justify-between items-center p-5 text-2xl text-white'>
                    <div>What is Bountify ?</div>
                    <ArrowDownIcon size={48}  color='white'></ArrowDownIcon>
                </div>
                <div className='w-[90%] h-[80px] bg-teal-600 flex justify-between items-center p-5 text-2xl text-white'>
                    <div>How does Bountify Works?</div>
                    <ArrowDownIcon size={48}  color='white'></ArrowDownIcon>
                </div>
                <div className='w-[90%] h-[80px] bg-teal-600 flex justify-between items-center p-5 text-2xl text-white'>
                    <div>How can I apply to join Bountify?</div>
                    <ArrowDownIcon size={48}  color='white'></ArrowDownIcon>
                </div>
                <div className='w-[90%] h-[80px] bg-teal-600 flex justify-between items-center p-5 text-2xl text-white'>
                    <div className='w-[70%]'>What makes Bountify different from traditional incubators and accelerators?</div>
                    <ArrowDownIcon size={48}  color='white'></ArrowDownIcon>
                </div>
                <div className='w-[90%] h-[80px] bg-teal-600 flex justify-between items-center p-5 text-2xl text-white'>
                    <div>What documents are needed to register my startup?</div>
                    <ArrowDownIcon size={48}  color='white'></ArrowDownIcon>
                </div>
                <div className='w-[90%] h-[80px] bg-teal-600 flex justify-between items-center p-5 text-2xl text-white'>
                    <div>What kind of Network Opprotunities provide Bountify?</div>
                    <ArrowDownIcon size={48}  color='white'></ArrowDownIcon>
                </div>
                <div className='w-[90%] h-[80px] bg-teal-600 flex justify-between items-center p-5 text-2xl text-white'>
                    <div>How does Bountify select its mentors?</div>
                    <ArrowDownIcon size={48}  color='white'></ArrowDownIcon>
                </div>
                <div className='w-[90%] h-[80px] bg-teal-600 flex justify-between items-center p-5 text-2xl text-white'>
                    <div>How does Bountify help startups prepare for investment?</div>
                    <ArrowDownIcon size={48}  color='white'></ArrowDownIcon>
                </div>
                 <div className='w-[90%] h-[80px] bg-teal-600 flex justify-between items-center p-5 text-2xl text-white'>
                    <div>What kind of Exhibition does Bountify organize?</div>
                    <ArrowDownIcon size={48}  color='white'></ArrowDownIcon>
                </div>
                 <div className='w-[90%] h-[80px] bg-teal-600 flex justify-between items-center p-5 text-2xl text-white'>
                    <div>How Bountify’s rates the Credibility of startup? </div>
                    <ArrowDownIcon size={48}  color='white'></ArrowDownIcon>
                </div>
                </div>                                

      </div>
    </div>
  )
}

export default Connection