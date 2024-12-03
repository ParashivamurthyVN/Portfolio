import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from './components/navbar';
import Home from './components/home';
import Contact from './components/contact';
import About from './components/about';
import Experiance from './components/experiance';
import Projects from './components/projects';
import Footer from './components/footer';

function App() {
  var secondary ='#73b7b0';
  var primary ='#28397b';
  return (
<BrowserRouter>
<Box className='app' sx={{ position: 'relative', overflow: 'hidden', height: '100vh', backgroundColor:'#fcfbf7', color:'#28397b' }}>
<Navbar />
<Routes>
  <Route path="/" exact element={<Home/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/experiance' element={<Experiance/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/projects' element={<Projects/>}/>
</Routes>
<Footer/>
</Box>
</BrowserRouter>
  );
}

export default App;
