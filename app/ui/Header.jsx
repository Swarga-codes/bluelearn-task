import React from 'react'
import Image from 'next/image'
import India from '@/app/assets/india.png'
import {ChevronRight,CircleCheck} from 'lucide-react'

function Header() {
  return (
    <div className='m-10 bg-[#0129514D] px-16 py-10 flex flex-col items-center border-2 border-solid rounded-3xl'>
        <h1 className='text-blue-900 font-bold text-4xl'>Experience learning at<span className='text-[#FF6905]'> our centres near you!</span></h1>
        <div className='flex mt-10'>
        <Image
        src={India}
        height={150}
        width={150}
        alt='india'
        className='w-[450px] h-[300px]'
        />   
        <div className='ml-16 px-20'>
            <p>Our ever growing number of centers, spread across India, are a melting pot of absolute. They are hubs of academic excellence where dreams are nurtured, skills are honed, and futures are built.</p>
        <ul className='mt-5 font-semibold'>
            <li className='flex'> <span className='mr-2 mb-2'><CircleCheck className='bg-white rounded-full' stroke='#FF6905'/></span>Personalised learning from top educators in your very own city</li>
            <li className='flex'><span className='mr-2 mb-2'><CircleCheck className='bg-white rounded-full' stroke='#FF6905'/></span>State-of-the-Art Facilities with latest technologies</li>
            <li className='flex'><span className='mr-2'><CircleCheck className='bg-white rounded-full' stroke='#FF6905'/></span>Unparalleled in-person Experience</li>
        </ul>
        <p className='text-[#FF6905] text-4xl mt-10 font-bold'>Checkout the centre closest to you</p>
        <select className='mt-5 py-5 px-5 w-96 bg-transparent border-[#FF6905] border-2 border-solid outline-none rounded-lg text-gray-600' name="city" id="city" defaultValue={"City"}>
            <option value="City">City</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Chennai">Chennai</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Bangalore">Bangalore</option>
        </select>
        <br />
        <select className='mt-5 py-4 px-5 w-96 bg-transparent border-[#FF6905] border-2 border-solid outline-none rounded-lg text-gray-600' name="program" id="program" defaultValue={"Preferred Program"}>
            <option value="Preferred Program">Preferred Program</option>
            <option value="M.Tech">M.Tech</option>
            <option value="CAT">CAT</option>
            <option value="B.Tech">B.Tech</option>
            <option value="MBA">MBA</option>
        </select>
        <br />
        <button
    type="button"
    className="rounded-full flex align-middle justify-center mt-8 text-center bg-[#FF6905] w-56 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >
  <span className='m-auto'> Find a centre</span> 
    <span className="ml-auto">
      <ChevronRight />
    </span>
  </button>
        </div>
        </div>
    </div>
  )
}

export default Header