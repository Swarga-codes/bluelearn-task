import React from 'react'
import VideoCard from '@/app/assets/videocards.png'
import Image from 'next/image'
function VideoCards() {
  return (
    
        <Image
        src={VideoCard}
        height={300}
        width={300}
        alt='video'
        />
  
  )
}

export default VideoCards