import './App.css';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Skill from './components/Skill';
import { Blog } from './components/Blog';
import JavaScript from './components/JavaScript';
import React from './components/React';
import Css from './components/Css';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
         <Route path='/About' element={<><About/> <Skill /><Footer/></>}/>
         <Route path='/Skill' element={<Skill/>} />
         <Route path='/' element={<><About/><Skill/><Footer/></>}/>
         <Route path='/blog' element={<Blog/>}>
            <Route path='javascript' element={<JavaScript/>}/>
            <Route path='' element={<JavaScript/>}/>
            <Route path='react' element={<React/>}/>
            <Route path='css' element={<Css/>}/>
         </Route>
         <Route path='*' element={<><About/> <Skill /><Footer/></>}/>
      </Routes>
      
      
      
      
    </div>
  );
}

export default App;
