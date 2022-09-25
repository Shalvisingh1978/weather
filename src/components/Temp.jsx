// import React from 'react';
// import { useState } from 'react';
// import "./css/style.css";

// const Temp = () => {
//     const [city, setCity] = useState(null);
//     const [search, setSearch] = useState("mumbai");

//   return (
//     <>
//    <div className="box">
//      <div className="inputData">
//      <input type="search"
//      className="inputFeild" />
//      </div>
  

//     <div className="info">
//     <h2 className='location'>
//     <i class="fa-solid fa-street-view">{city}</i>
//     </h2>
//     <h1 className="temp">
//         5.25 cel
//     </h1>
//     <h3 className="tempmin_max"> min : 5.25 cel | max : 5.25 cel</h3>

//     </div>
//     <div className='wave -one'></div>
//     <div className='wave -two'></div>
//     <div className='wave -three'></div>
//     </div>
//     </>
 
//   )
// }

// export default Temp
import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

const Temp = () => {
    const apiKey = "f56f24967aaf51182d1d4df628297c6d"
    const [inputCity, setInputCity] = useState("")
    const [data, setData] = useState({})
  
  
    const getWetherDetails = (cityName) => {
      if (!cityName) return
      const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
      axios.get(apiURL).then((res) => {
        console.log("response", res.data)
        setData(res.data)
      }).catch((err) => {
        console.log("err", err)
      })
    }
  
    const handleChangeInput = (e) => {
      console.log("value", e.target.value)
      setInputCity(e.target.value)
    }
  
    const handleSearch = () => {
      getWetherDetails(inputCity)
    }
  
  
    return (
      <div className="col-md-12">
        <div className="wetherBg">
          <h1 className="heading">Weather App</h1>
  
          <div className="d-grid gap-3 col-4 mt-4">
            <input type="text" className="form-control"
              value={inputCity} placeholder="Enter Location"
              onChange={handleChangeInput} />
            <button className="btn btn-primary" type="button"
              onClick={handleSearch}
            >Search</button>
          </div>
        </div>
  
        {Object.keys(data).length > 0 &&
          <div className="col-md-12 text-center mt-5">
  
            <div className="shadow rounded wetherResultBox">
              <img className="weathorIcon"
                src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />
  
              <h5 className="weathorCity">
                {data?.name}
              </h5>
              <h6 className="weathorTemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>
            </div>
          </div>
        }
  
      </div>
    );
  }

export default Temp

