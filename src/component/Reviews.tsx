import { Star } from 'lucide-react'
import React from 'react'

function Reviews() {
  return (
    <div className='flex flex-col gap2  p-4 w-[700px] h-fit '>
        <div className='w-full h-[60px] flex items-start gap-3'>
            <div className='w-[50%] h-full  gap-5 flex items-center'>
                <img className='w-[40px] h-[40px] rounded-full' src='\assets\react.svg'></img>
                <div className='flex flex-col items-start text-md font-normal gap-1'>
                    <div>Arham</div>
                    <div className='flex gap-5'>
                        <div className='flex gap-1'>
                          {Array.from({ length: 5 }, (_, i) => (
                            <Star size={16} color='teal' fill='teal'  key={i}></Star>
                           ))}
                        </div>
                        <div  className='text-md text-gray-400 font-medium'>
                            May 24,2007
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-[90%] p-2 h-fit'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium velit totam cupiditate architecto quam, quaerat fugiat repellendus odio nulla vel consectetur modi error adipisci autem debitis iusto obcaecati minus, aliquid harum, ut omnis eligendi deserunt? Corrupti porro veritatis, magnam adipisci labore dolorum, sequi nesciunt impedit error reprehenderit a laudantium earum tenetur, perspiciatis placeat asperiores minus in et. Ipsa, libero voluptatum. Voluptatem fugit modi esse commodi excepturi explicabo nostrum eaque accusantium?
        </div>
        <div className='w-[90%] p-2 h-fit flex flex-col items-start gap-1 bg-gray-200 rounded-2xl'>
            <div>Bountify</div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium velit totam cupiditate architecto quam, quaerat fugiat repellendus odio nulla vel consectetur modi error adipisci autem debitis iusto obcaecati minus, aliquid harum, ut omnis eligendi deserunt? Corrupti porro veritatis, magnam adipisci labore dolorum, sequi nesciunt impedit error reprehenderit a laudantium earum tenetur, perspiciatis placeat asperiores minus in et. Ipsa, libero voluptatum. Voluptatem fugit modi esse commodi excepturi explicabo nostrum eaque accusantium?
        </div>
    </div>
  )
}

export default Reviews