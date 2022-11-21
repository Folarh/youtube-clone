import React from 'react'
import Avatar from '../assets/avatarpic.jpg'
import Videocard from './Videocard'
//styles
import './Recommend.css'

export default function Recommend() {
  return (
    <div className='recommended'>
      <h2>Recomended</h2>
      <div className="recommended-videos">
        <Videocard
        title= "Ronaldo best dribble and  skills | 2008/2009"
        views=" 3.10m views"
        channelImage={Avatar}
        channel=" ojo taiwo"
        image= "https://i.ytimg.com/an_webp/bdPvE4QpgqM/mqdefault_6s.webp?du=3000&sqp=CI_C7JsG&rs=AOn4CLD6NCKNjPo6t02zu54NEABHQGwK5Q"
        />
         <Videocard
        title= " The good and the bad | 2008/2009"
        views=" 3.10m views"
        channelImage={Avatar}
        channel=" ojo taiwo"
        image= "https://i.ytimg.com/vi/dS7kzPGkb3o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBG3xFjEUGm44h6LskT32ZG8s3ERA"
        />
         <Videocard
        title= "Better for worses | 2008/2009"
        views=" 3.10m views"
        channelImage={Avatar}
        channel=" ojo taiwo"
        image= "https://i.ytimg.com/vi/MhY7mVCIU6Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQrDVhXDdctA2A1NHLaS09E_tpbg"
        />
         <Videocard
        title= "Music heals and touches |2006"
        views=" 50.10m views"
        channelImage={Avatar}
        channel=" Folarin Taiye"
        image= "https://i.ytimg.com/vi/dS7kzPGkb3o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBG3xFjEUGm44h6LskT32ZG8s3ERA"
        />
          <Videocard
        title= "Vue3 for begingners | 2008/2009"
        views=" 3.10m views"
        channelImage={Avatar}
        channel=" idrisar sumareh"
        image= "https://i.ytimg.com/vi/0FwBjPeLqQ8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDx1q0LY1XMfch9r5HvefFS3xPUzg"
        />
          <Videocard
        title= "last night in ethopia |20017-20019"
        views=" 3.10m views"
        channelImage={Avatar}
        channel=" Dami akintola"
        image= "https://i.ytimg.com/vi/DQQp9K_7z1s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDuxtPB21f2SdJM3KjSyejx_mZu8A"
        />
       
      </div>
    </div>
  )
}
