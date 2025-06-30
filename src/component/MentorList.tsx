import React, { useState } from 'react'
import Navbar from './Navbar'
import MentorCard from './MentorCard'
import { Filter, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import { api } from "D:/project/product/bountify/convex/_generated/api.js"; 
import { useQuery } from 'convex/react';
function MentorList() {
     const navigate = useNavigate();
    const[countFilter,setCounterFilter]=useState(0)
     const gotoNext = (id: string) => {
        navigate(`/MentorsDetail/${id}`);
    };
    const  List=useQuery(api.mentorCard.get)
  return (
    <div className='flex flex-col gap-3 w-full h-screen'>
        <Navbar></Navbar>
        <div className='flex justify-around p-3 w-full h-screen overflow-y-auto'>
            <div className='w-[26%] bg-teal-500 h-[170%] flex items-end mt-13 rounded-2xl justify-start'>
                <div className='w-[100%] bg-gray-200 h-[101%] drop-shadow-md drop-shadow-gray-900 rounded-2xl mb-5 mr-4 flex flex-col gap-4'>
                    <div className='w-full h-[8%] p-3 mt-4 flex flex-col gap-3'>
                        <div className=' flex justify-between items-center w-ful border-b-2 border-black'>
                            <div className='text-md'>Filter</div>
                            <Filter size={16}></Filter>
                        </div>
                          <div className=' flex justify-between items-center w-ful border-b-2 border-black'>
                            <div className='text-md gap-3 flex'>
                                <div>{countFilter}</div>
                                <div>Filter applied</div>
                            </div>
                            <div className='text-md gap-3 flex items-center'>
                                <X size={16}></X>
                                <div>Clear</div>
                            </div> 
                        </div>
                    </div>
                    <div className='w-full h-[23%] flex flex-col justify-start p-2 gap-2'>
                        <div className='text-l pb-2 border-b-2 border-black'>Industry Focus</div>
                        <label className='flex gap-3'><input type='radio'></input><div>Tech(AI,SaaS,Blockchain)</div></label>
                        <label className='flex gap-3'><input type='radio'></input><div>Healthcare & Biotech</div></label>
                        <label className='flex gap-3'><input type='radio'></input><div>E-commerce & Retail</div></label>
                        <label className='flex gap-3'><input type='radio'></input><div>Fintech & Banking</div></label>
                        <label className='flex gap-3'><input type='radio'></input><div>Sustainability & Green Energy</div></label>
                        <label className='flex gap-3'><input type='radio'></input><div>Others (Education, Logistics, Real Estate, etc.)</div></label>
                    </div>
                    <div className='w-full h-[29%] flex flex-col justify-start p-2 gap-2'>
                        <div className='text-l pb-2 border-b-2 border-black'>Expertise Area</div>
                        <label className='flex gap-3'><input type='radio'></input><div>Business Strategy & Growth</div></label>
                        <label className='flex gap-3'><input type='radio'></input><div>Fundraising & Investors Relation</div></label>
                        <label className='flex gap-3'><input type='radio'></input><div>Product Development & Tech Advice</div></label>
                        <label className='flex gap-3'><input type='radio'></input><div>Startups</div></label>
                        <label className='flex gap-3'><input type='radio'></input><div>Management Strategy</div></label>
                        <label className='flex gap-3'><input type='radio'></input><div>Marketing & Branding</div></label>
                        <label className='flex gap-3'><input type='radio'></input><div>Leadership & Team Building</div></label>
                        <label className='flex gap-3'><input type='radio'></input><div>Legal Compliances</div></label>
                        <label className='flex gap-3'><input type='radio'></input><div>others</div></label>
                    </div>
                    <div className='w-full h-[12%] flex flex-col justify-start p-2 gap-2'>
                        <div className='text-l pb-2 border-b-2 border-black'>User Ratings & Reviews</div>
                        <label className='flex gap-3'><input type='radio'></input><div>Most Recommended Mentors</div></label>
                        <label className='flex gap-3'><input type='radio'></input><div>Verified Success Stories</div></label>
                        <label className='flex gap-3'><input type='radio'></input><div>HIghest-rated Experts</div></label>
                    </div>
                    <div className='w-full h-[13%] flex flex-col justify-start p-2 gap-2'>
                        <div className='text-l pb-2 border-b-2 border-black'>Availability & Engagement</div>
                        <label className='flex gap-3'><input type='radio'></input><div>Short-term/ One-time Consultation</div></label>
                        <label className='flex gap-3'><input type='radio'></input><div>Ongoing Mentorship</div></label>
                        <label className='flex gap-3'><input type='radio'></input><div>Group Sessions / Webinars</div></label>
                        <label className='flex gap-3'><input type='radio'></input><div>1-on-1 Personalized Guidance</div></label>
                    </div>
                </div>
            </div>
            <div className='w-[50%] flex  flex-col gap-7 mb-2.5'>
                {List?.map((lst)=>(
                    <MentorCard
                    img={lst.img}
                    name={lst.name}
                    amount={lst.amount} 
                    details={lst.details}
                    tag={lst.tag}
                    onClick={()=>gotoNext(lst._id)}
                    ></MentorCard>
                ))}
            </div>
        </div>
    </div>
  )
}

export default MentorList