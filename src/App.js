import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

    /* onLoaderFinished={() => setProgress(0)}*/
const App =()=> {
  const apiKey="747431a5242541a8a6a2bad50362cc47";
  const [progress, setprogress] = useState(0)
    return (
      <Router>
<div className='contain'>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}       
      />
      <Routes>
        <Route path="/" element={ <News setProgress={setprogress} apiKey={apiKey} category="general"/> } />
        <Route path="/business" element={ <News setProgress={setprogress} apiKey={apiKey} category="business"/> } />
        <Route path="/entertainment" element={ <News setProgress={setprogress} apiKey={apiKey} category="entertainment"/> } />
        <Route path="/sports" element={ <News setProgress={setprogress} apiKey={apiKey} category="sports"/> } />
        <Route path="/health" element={ <News setProgress={setprogress} apiKey={apiKey} category="health"/> } />
        <Route path="/contact" element={ <News setProgress={setprogress} apiKey={apiKey} category="contact"/> } />
        <Route path="/technology" element={ <News setProgress={setprogress} apiKey={apiKey} category="technology"/> } />
        <Route path="/science" element={ <News setProgress={setprogress} apiKey={apiKey} category="science"/> } />
      </Routes>
      </div>
    </Router>
             
    )
  }
export default App