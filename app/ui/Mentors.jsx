import React from 'react'
import MentorCards from './MentorCards'
import {CircleChevronLeft,CircleChevronRight} from 'lucide-react';
const dummyMentors=[{name:'Rosy Langford', profilePic:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',exp:10,star:4,reviews:200},
{name:'Jimmy Gregory', profilePic:'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',exp:7,star:3,reviews:500},
{name:'Tim Cook', profilePic:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',exp:5,star:2,reviews:50}]

function Mentors() {
  return (
    <div className='mt-20'>
        <div className='bg-[#FF6905] m-10 rounded-3xl h-96'>
        <h1 className='text-4xl text-center text-white p-10'>Meet our top Mentors</h1>
        </div>
        <div className='flex flex-wrap items-center justify-center mt-[-20rem]'>
        <CircleChevronLeft />
            {dummyMentors.map((mentor,idx)=>(
                <MentorCards key={idx} mentor={mentor}/>
            ))

            }
        <CircleChevronRight />

        </div>
    </div>
  )
}

export default Mentors