import { Link } from "react-router-dom"
import data from '../countries.json'
import { useState, useEffect } from "react"
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from "react-router-dom";
import axios from 'axios'



const CountrieList = () => {

    const [loading, setLoading] = useState(false)
    const [dataCountry, setDataCountry] = useState([])
    
    useEffect( () => {
        fetchData()
        setLoading(true)
        // console.log(loading)
            }, []
    )



    const fetchData =() =>{
        axios.get('https://ih-countries-api.herokuapp.com/countries')
        .then((response => setDataCountry(response.data))
        )

    }
    
    

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