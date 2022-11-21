import React,{useState} from 'react'
import {Link} from "react-router-dom"
import Youtube from '../assets/youtubelogo.png'
import Avatarpic from '../assets/avatarpic.jpg'

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MissedVideoCallSharpIcon from '@mui/icons-material/MissedVideoCallSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//styles
import './Topbar.css'

export default function Topbar() {
  const [inputSearch, setInputSearch]= useState("");
  return (
    <div className='topbar'>

        <div className='topbar-left'>
        <MenuIcon className='topbar-icon'/>
      <img src={Youtube} alt="logo" className='topbar-logo'></img>
        </div>

        <div className='topbar-center'>
            <input 
            onChange={e=>setInputSearch(e.target.value)}
            value={inputSearch}
             placeholder='search' type="text" />

             <Link to={`/search/${inputSearch}`}> 
             {/* <Link to={"/search"}>  */}
             <SearchIcon className='topbar-search'/>
             </Link>
           

            </div>

        <div className='topbar-right'>

        <MissedVideoCallSharpIcon className='topbar-icon'/>
        <AppsSharpIcon className='topbar-icon'/>
        <NotificationsIcon className='topbar-icon'/>
        <AccountCircleIcon className='topbar-icon'
         src={Avatarpic}
         alt="avatar-alt"
        
         />

        </div>
      
    </div>
  )
}

