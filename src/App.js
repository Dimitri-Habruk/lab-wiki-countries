import './App.css';
import Navbar from './components/Navbar';
import CountrieList from './components/CountriesList';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">  
    {/* <Navbar/> */}
    
 
    <Routes>
    
      <Route path='/nav' element={<Navbar />}/>
      <Route path='/' element={<CountrieList />}/>
      <Route path='/countrie-list/country-details' element={<CountryDetails />}/>
      <Route path='/:idCountry' element={<CountryDetails/>}/>




    </Routes>
    </div>
  );
}

export default App;
