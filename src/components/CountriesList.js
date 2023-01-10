import { Link } from "react-router-dom"
import data from '../countries.json'
import { useState, useEffect } from "react"
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from "react-router-dom";



const CountrieList = () => {

    const [dataCountry, setDataCountry] = useState(data)
    
    useEffect( () => {
            // console.log(dataCountry)
    }, []
    )



 
   

    


    return (
        
        <div className='listCountry'>

            {dataCountry.map((elem, index) => <>
            

            
                <ListGroup className="listecountrywrapper" >
                    <ListGroup.Item > <Link to={`/${elem.alpha3Code}`} state={dataCountry}> 
                    <p> <img src={`https://flagpedia.net/data/flags/icon/72x54/${elem.alpha2Code.toLowerCase()}.png`} className='imgDrapeau'/></p>
                    <p className="listecountry" > {elem.name.common} </p>  </Link> </ListGroup.Item>
       
                 </ListGroup>
                 </>
                )
            
            
             }
        
        </div>
    
    )
}
export default CountrieList