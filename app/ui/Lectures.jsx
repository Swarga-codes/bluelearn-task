import React from 'react'
import VideoCards from './VideoCards'
import {ChevronRight} from 'lucide-react'
function Lectures() {
  return (
    <div className='mt-10 text-center w-full'>
        <h1 className='text-blue-900 font-bold text-4xl'>Not sure which course is for you? </h1>
<h1 className='text-blue-900 font-bold text-4xl'>Checkout these  <span className='text-[#FF6905] underline'>FREE lectures</span><span> to help you choose!</span></h1>
<div className='mt-20 w-full flex justify-center'>
    {[...Array(4)].map((item,idx)=>(
 <VideoCards key={idx}/>
    ))
   
}

</div>
<div className="flex justify-center">
  <button
    type="button"
    className="rounded-full flex align-middle justify-center mt-8 text-center bg-[#FF6905] w-54 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >
    Explore more
    <span className="ml-2">
      <ChevronRight />
    </span>
  </button>
</div>
    </div>
  )
}

export default Lectures