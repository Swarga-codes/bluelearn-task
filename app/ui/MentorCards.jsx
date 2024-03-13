import React from 'react'
import Image from 'next/image'
import {Clock,Star} from 'lucide-react'
function MentorCards({mentor}) {
  return (
    <div className="w-[300px] rounded-md border m-10 border-transparent">
    <Image
src={mentor?.profilePic}
alt="profile pic"
      height={300}
      width={300}
      className="h-[250px] w-full rounded-md object-cover"
    />
    <div className="p-4 bg-white rounded-xl border-[#FF6905] border-solid border-2 mt-[-0.5rem]">
      <h1 className="text-lg font-bold">{mentor?.name}</h1>
      <p className="mt-10 text-sm text-gray-600 flex align-middle items-center">
      <Clock />
        <span className='ml-2'>{mentor?.exp} Years</span>
      </p>
  <div className='flex align-middle items-center mt-5'>
    {[...Array(Math.floor(mentor?.star))].map((star,idx)=>(
 <Star key={idx} fill='#FF6905' stroke='#FF6905'/>
    ))
 
    }
{[...Array(5-Math.floor(mentor?.star))].map((star,idx)=>(
 <Star key={idx} fill='#FFE1AD' stroke='#FFE1AD'/>
    ))
 
    }
  <p className='ml-2'>({mentor?.reviews})</p>
  </div>
    </div>
  </div>
  )
}

export default MentorCards