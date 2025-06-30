import React, { useState } from 'react'
import Navbar from './Navbar'
import { Cake, Calendar, Clock, Donut, Locate, MessageCircle, PersonStandingIcon, Phone, Plus, RemoveFormatting, Save, Star, Timer, User, UserCircle } from 'lucide-react'
import Reviews from './Reviews'
import WriteReview from './WriteReview'
import { Select } from '@chakra-ui/react'
function MentorInputDetail() {
const[amount,setamount]=useState<number>(0)
const[img,setimg]=useState<File|null>(null)
const[country,setcountry]=useState("")
const[Name,setName]=useState("")
const[breif,setbrief]=useState("")
const[LinkName,setLinkName]=useState([])
const[Links,setLinks]=useState([])
const[About,setAbout]=useState("")
const[extendedsummmary,setExtendedSummary]=useState("")
const[youtube,setyoutube]=useState("")
const[resume,setresume]=useState(null)
const[certificate,setcertifiactes]=useState([])
const[skills,setSkills]=useState([])
const[Exprience,setExperiance]=useState([])
const countries = ["United States", "India", "Canada", "United Kingdom", "Australia"];
const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setimg(event.target.files[0]); // Store the selected file
    }
  };
  return (
    <div className='w-full h-screen flex flex-col pb-7'>
      <Navbar></Navbar>
      <div className='w-full h-full flex flex-col items-center mb-6'>
        <div className='w-full h-[50%] shrink-0'>
          <div className='w-full h-[35%] bg-teal-500'></div>
          <div className='w-full h-[100%] flex items-center justify-around border-b-2 border-teal-500'>
            <div className='w-[24%] h-[470px]   rounded-2xl p-2 flex justify-start flex-col items-start gap-3 mb-20'>
              <div className='w-full h-fit flex justify-start gap-3 items-center'>
                {img ? (
                    <img src={URL.createObjectURL(img)} className="w-[150px] h-[150px] rounded-full"></img>
                ):(
                <label htmlFor="file-upload" className="bg-gray-300 rounded-full w-[150px] h-[150px] flex items-center justify-center cursor-pointer">
                <User size={32}></User>
                 <input id="file-upload" type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                  </label>
                )}
                <div className='flex p-2 gap-4 bg-gray-200 text-md rounded-2xl items-center'>
                  <Star size={16}></Star>
                  <div>Mentor</div>
                </div>
              </div>
              <div>
                <div className='text-lg  font-semibold'>
                    <input type='text' className='border-black border-2'  onChange={(e)=>{setName(e.target.value)}} placeholder='Name'></input>
                </div>
              </div>
              <div>
                <div className='text-lg  font-semibold flex gap-2 items-center'>
                    <label htmlFor='country'>Select a country</label>
                    <select
                    id="country"
                    value={country}
                    onChange={(e)=>{setcountry(e.target.value)}}
                    >
                        <option value="" disabled> choose a country</option>
                        {countries.map((country,index)=>(
                            <option key={index} value={country}>{country}</option>
                        ))}
                    </select>
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
              <div className='text-2xl font-bold'>
                <input type='number' placeholder='write per month cost' onChange={(e)=>{setamount(Number(e.target.value))}}></input>
                </div>
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
        <div className='w-full h-[80%] border-b-2 border-teal-500 mt-30 shrink-0 pl-30  flex flex-col items-start justify-center'>
          <div className='text-3xl font-semibold'>About</div>
          <div className='w-full h-[40%] flex flex-col justify-around'>
            <div className='w-[90%] h-[90%] text-lg'>
                <textarea value={About} className=' border-2 border-black h-[100%] w-[100%]' onChange={(e)=>{setAbout(e.target.value)}}></textarea>
            </div>
            <div className='text-3xl font-semibold mt-3'>Extended-summary</div>
            <div className='w-[90%] h-[90%] text-lg'>
                <textarea value={extendedsummmary} className=' border-2 border-black h-[100%] w-[100%]' onChange={(e)=>{setExtendedSummary(e.target.value)}}></textarea>
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

export default MentorInputDetail