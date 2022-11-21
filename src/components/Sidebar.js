import SidebarRows from './SidebarRows'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
//styles
import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className='side-bar'>
      <SidebarRows selected Icon={HomeIcon} title="Home"/>
      <SidebarRows Icon={WhatshotIcon}title="Trending"/>
      <SidebarRows Icon={SubscriptionsIcon}title="subscription"/>
      <hr/>
      <SidebarRows Icon={VideoLibraryIcon}title="Library"/>
      <SidebarRows Icon={HistoryIcon}title="History"/>
      <SidebarRows Icon={OndemandVideoIcon}title="Your videos"/>
      <SidebarRows Icon={WatchLaterIcon}title=" Watch later"/>
      <SidebarRows Icon={ThumbUpAltOutlinedIcon}title="Liked videos"/>
      <SidebarRows Icon={ExpandMoreOutlinedIcon}title="Show more"/>
      <hr/>
    </div>
  )
}
