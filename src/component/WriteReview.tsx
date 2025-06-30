import { Textarea } from '@chakra-ui/react';
import { Star } from 'lucide-react'
import React, { useState } from 'react'

function WriteReview() {
    const[countStar,setcountStar]=useState(1);
    const[review,setreview]=useState("")
  return (
    <div className='flex flex-col gap-2  p-4 w-[700px] h-fit '>
          <div className='w-full h-[60px] flex items-start gap-3'>
            <div className='w-[50%] h-full  gap-5 flex items-center'>
                <img className='w-[40px] h-[40px] rounded-full' src='\assets\react.svg'></img>
                <div className='flex flex-col items-start text-md font-normal gap-1'>
                    <div>Arham</div>
                    <div className='flex gap-5'>
                        <div  className='text-lg text-gray-400 font-medium'>
                            May 24,2007
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex gap-1'>
           <Star size={32} fill='teal' color='teal' onClick={()=>{setcountStar(1)}}></Star> 
           <Star size={32} fill={countStar>1? "teal":"none"} color='teal' onClick={()=>{setcountStar(2)}}></Star> 
           <Star size={32} fill={countStar>2? "teal":"none"} color='teal' onClick={()=>{setcountStar(3)}}></Star>
           <Star size={32} fill={countStar>3? "teal":"none"} color='teal' onClick={()=>{setcountStar(4)}}></Star>
           <Star size={32} fill={countStar>4? "teal":"none"} color='teal' onClick={()=>{setcountStar(5)}}></Star>
        </div>
        <div>
           <textarea 
           value={review}
           onChange={(e)=>{setreview(e.target.value)}}
           placeholder='write review here'
           cols={30}
           rows={5}
           className='w-full h-[250px] outline-0  border-2 border-gray-600'
           ></textarea>
        </div>
        <div className='p-2 hover:bg-teal-700  rounded-md  text-center text-xl text-white hover:scale-102 transition  duration-200 bg-gray-500'>
            Post
        </div>
    </div>
  )
}

export default WriteReview