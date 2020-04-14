import { weatherAPi } from "../API/api"

const SET_WEATHER = 'SET_WEATHER'
const SET_LOCATION = 'SET_LOCATION'
const SET_DEFAULT_STATE = 'SET_DEFAULT_STATE'

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
                ...state, location: action.location.Location
            }
        }case SET_DEFAULT_STATE: {
            return {
                ...state, weather: null,
                          location: null
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
export const setDefaultState = () => ({type: SET_DEFAULT_STATE})

export const getWeather = (location) => async (dispatch) => {
    let response = await weatherAPi.getWeather(location)
    if(response.status !== 200){
        console.log(`some error with response ststus ${response.status}`)
        setDefaultState()
    }else{
        dispatch(setWeather(response))
    }

}

export default weatherReducer