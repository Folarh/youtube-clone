import{BrowserRouter, Routes, Route,} from "react-router-dom"
import './App.css';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Recommend from './components/Recommend';
import Search from './components/Search';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Topbar/>
     
      <div className='app-page'>
     
      <Sidebar />
      <Recommend />
      
    </div>
   
     
      <Routes>
      <Route path="/" elament={<Recommend/>}/>
      <Route path="/search/:searchTerm" elament={<Search/>}/>
      </Routes>

     
      
      
     
    </BrowserRouter>
    </div>
  );
}

export default App;
