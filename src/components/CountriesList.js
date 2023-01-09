import { Link } from "react-router-dom"
import data from '../countries.json'
import { useState, useEffect } from "react"
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from "react-router-dom";
import Navbar from './Navbar'
import CountryDetails from "./CountryDetails";



const CountrieList = () => {
    let {countryCode} = useParams(data.alpha3Code)

    const [dataCountry, setDataCountry] = useState(data)
    
    useEffect( () => {
            console.log(dataCountry)
    }, []
    )



 
   

    


    return (
        
        <div className='listCountry'>
        <Navbar />

            {dataCountry.map((elem, index) => <>
            

            
                {/* <Link> <h5>{elem.name.common} </h5>   </Link> */}
                <ListGroup className="listecountrywrapper" >
                    <ListGroup.Item > <Link to={`/${elem.alpha3Code}`}> 
                    <p> <img src={`https://flagpedia.net/data/flags/icon/72x54/${elem.alpha2Code.toLowerCase()}.png`} className='imgDrapeau'/></p>
                    <p className="listecountry" > {elem.name.common} </p>  </Link> </ListGroup.Item>
       
                 </ListGroup>
                 </>
                )
            
            
             }
        
        <Link to={{pathname :'/countrie-list/country-details', state :dataCountry}}/>
        </div>
    
    )
}
export default CountrieList