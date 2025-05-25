import Navigation from './components/Navigation/Havigation';
import Footer from "./components/Footer/Footer";
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Contributing from './components/Footer/Contributing'
import License from './components/Footer/License';
import Privacy from './components/Footer/Privacy';
import Terms from './components/Footer/Terms';

import En from './components/Languages/En/Home';
import It from './components/Languages/It';
import Bg from './components/Languages/Bg';
import De from './components/Languages/De';



function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className="mt-5 mb-5"></div>

      <Routes>
        {/* Add your language options here. You can add as many languages as you want.*/}
        <Route path='/en' element={<En/>}/>
        <Route path='/it' element={<It/>}/>
        <Route path='/bg' element={<Bg/>}/>
        <Route path='/de' element={<De/>}/>
        </Routes>
        
        <Routes>
        <Route path='/contributing' element={<Contributing/>}/>
        <Route path='/license' element={<License/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='/terms' element={<Terms />}/>
        </Routes>

        <div className="mt-5 mb-5"></div>

        <Footer/>
    </div>
  );
}

export default App;
