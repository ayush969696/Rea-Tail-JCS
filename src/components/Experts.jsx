import React from 'react'
import laptop from '../assets/laptop.webp'

function Experts() {
  return (
    <div className='max-w-[1240px] p-4 mx-auto my-10  md:grid grid-cols-3'>
        <div className="col-span-1 md:w-[80%] text-center">
            <img src={laptop} className="inline" />
        </div>
        <div className="col-span-2 flex flex-col justify-center">
            <h1 className='text-[#29785f] font-bold text-xl my-2'>LEARN FROM EXPERTS</h1>
           <p className='my-2 font-bold text-gray-700 text-justify'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere iure ut et vel dicta quae delectus voluptatem aut possimus ex.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, harum?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, ad.
           </p> 
            <button className='w-[30%] bg-black text-white p-3 rounded my-2'>Get Started</button>

        </div>

    </div>
  )
}

export default Experts
