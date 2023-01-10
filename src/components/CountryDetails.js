import { useState } from "react"
import { useLocation } from "react-router-dom"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const CountryDetails = () => {
    let location = useLocation()

    let {idCountry} = useParams()



    const matchAlpha3Code= () => {
        var result = location.state.find(elem => elem.alpha3Code ==idCountry)
        return result
       }
    const selectedСountry = matchAlpha3Code()
     
    // console.log(selectedСountry.borders        )


    return (
        <div className="">
        <p> <img src={`https://flagpedia.net/data/flags/icon/72x54/${selectedСountry.alpha2Code.toLowerCase()}.png`} className='drapeauSecelted'/></p>
        <h1> {selectedСountry.name.common} </h1>
        <h2>Capital - {selectedСountry.capital}</h2>
        <h2>Area - {selectedСountry.area} km²</h2>
        <h2>Borders - {selectedСountry.borders.map(
            elem=> <Link to={`/${elem}`} state={location.state}> {elem} </Link>
            )}
        </h2>

       


        </div>

    )
}

export default CountryDetails