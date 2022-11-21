import React from 'react'
import './Videocard.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function Videocard ({image,title,channel,views,timestamp,channelImage}) {
  return (
    <div className='videoCard'>
      <img className='videoCard__thumbnail' src={image} alt=""/>

      <div className='video-info'>
        <AccountCircleIcon className='video-avatar' 
         alt={channel} 
         src={channelImage}/>
      </div>

      <div className="video-text">
        <h4>{title}</h4>
        <p>{channel}</p>
        <p>
          {views}.{timestamp}
          </p>
      </div>
    </div>
  )
}
