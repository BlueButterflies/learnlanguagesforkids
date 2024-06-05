import Navigation from './components/Navigation/Havigation';
import Footer from "./components/Footer/Footer";
import { Routes, Route } from 'react-router-dom';
import Contributing from './components/Footer/Contributing'

import './App.css';
import License from './components/Footer/License';
import Privacy from './components/Footer/Privacy';
import Terms from './components/Footer/Terms';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className="mt-5 mb-5"></div>
      
        <Routes>
        <Route path='/contributing' element={<Contributing/>}/>
        <Route path='/license' element={<License/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='/terms' element={<Terms />}/>
        </Routes>

        <Footer/>
    </div>
  );
}

export default App;
