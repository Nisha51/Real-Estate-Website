import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Contact from './component/Contact';
import Create from './component/Create';
import NotFound from './component/NotFound';
import {Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className='content'>
          <Routes>
          <Route index element={<Home/>}/>
            <Route exact path="/Home" element={<Home/>}/>
            <Route path="/Create" element={<Create/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
    </div>
  );
}

export default App;