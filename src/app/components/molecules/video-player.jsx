"use client"

import React from 'react'
import ReactPlayer from 'react-player'

function VideoPlayer() {
  return (
    <ReactPlayer
        width='100%'
        height='100%'
        url='https://inverseschool.com/assets/course/2024/10/09/video6705e8df6bc19.mp4' 
        playing={false} 
        controls={true} 
    />
  )
}

export default VideoPlayer
