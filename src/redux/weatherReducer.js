import { weatherAPi } from "../API/api"

const SET_WEATHER = 'SET_WEATHER'

let initialState = {}

const weatherReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_WEATHER: {
            return {
                ...state,  weather: action.weather
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

export const getWeather = () => async (dispatch) => {
    let response = await weatherAPi.getWeather()
    dispatch(setWeather(response))
}


export default weatherReducer