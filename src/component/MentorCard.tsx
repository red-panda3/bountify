import { Star } from 'lucide-react'
import React from 'react'

interface MentorCardInterface{
   img:string,
   name:string,
   tag:string,
   details:string,
   amount:number,
   onClick?: () => void;

}
function MentorCard({img,name,tag,details,amount,onClick}:MentorCardInterface) {
  return (
    <div className='flex justify-around p-2 bg-gray-200 rounded-2xl w-full h-[350px] min-w-[350px] items-center shrink-0' onClick={onClick}>
        <div className='h-[90%] w-[30%] min-w-[200px] bg-amber-400 shrink-0 mt-4' 
         style={{
          backgroundImage: `url("${img}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        >
        </div>
        <div className='h-[90%] w-[60%] min-w-[400px] shrink-0 flex flex-col p-2 justify-around'>
            <div className=' flex justify-around items-center w-full h-[20%]'>
                <div className='text-xl font-medium'>{name}</div>
                <div  className=' flex gap-1 p-2 rounded-xl bg-gray-400 items-center'>
                    <Star size={16}></Star>
                    {tag}
                </div>
            </div>
            <div className='w-full rounded-2xl bg-teal-700 h-[50%] p-3 text-white items-center'>
                {details}
            </div>
            <div className='w-full h-[20%] items-end flex justify-around p-1 mt-3'>
                <div className='flex flex-col gap-1 items-center p-1'>
                    <div className='text-l'>Starting from</div>
                    <div className='text-xl font-semibold'>${amount}/month</div>
                </div>
                <div className='bg-teal-300 rounded-xl p-3'>
                    View Profile
                </div>
            </div>
        </div>
    </div>
  )
}

export default MentorCard