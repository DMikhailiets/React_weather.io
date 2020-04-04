import { weatherAPi } from "../API/api"

const SET_WEATHER = 'SET_WEATHER'
const SET_LOCATION = 'SET_LOCATION'

let initialState = {
    weather: null,
    location: null,
}

const weatherReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_WEATHER: {
            return {
                ...state, weather: action.weather.data.data[0]
            }
        }
        case SET_LOCATION: {
            return {
                ...state, location: action.location
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

const setWeather = (weather) => ({type: SET_WEATHER, weather})
export const setLocation = (location) => ({type: SET_LOCATION, location}) 

export const getWeather = () => async (dispatch) => {
    let response = await weatherAPi.getWeather()
    dispatch(setWeather(response))
}

export default weatherReducer