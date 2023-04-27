import './App.css';
import HomePage from './components/Pages/HomePage';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Navbar from './components/Layouts/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Feedback from './components/Pages/Feedback';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<HomePage/>}></Route>      
      </Routes>
      <Routes>
        <Route exact path='/about' element={<About/>}></Route>      
      </Routes>
      <Routes>
        <Route exact path='/contact' element={<Contact/>}></Route>      
      </Routes>
      <Routes>
        <Route exact path='/feedback' element={<Feedback/>}></Route>      
      </Routes> 
      </Router>    
    </div>
  );
}
export default App;
