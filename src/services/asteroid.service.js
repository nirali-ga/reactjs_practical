import axios from "axios";

export const getAsteroidById=(asteroidId)=>{
    return  axios.get(`${process.env.REACT_APP_API_URL}${asteroidId}?api_key=${process.env.REACT_APP_API_KEY}`)
}

export const getAsteroids=()=>{
    return  axios.get(`${process.env.REACT_APP_API_URL}browse?api_key=${process.env.REACT_APP_API_KEY}`)
}
