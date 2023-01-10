import './App.css';
import Navbar from './components/Navbar';
import CountrieList from './components/CountriesList';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">  
      <Navbar/>
      <div className='countryAndSelect'>
        <CountrieList className='NavBar'/>
    
        <Routes>
        
          <Route path='/:idCountry' element={<CountryDetails/>}/>

        </Routes>
      </div>
    </div>
  );
}

export default App;
