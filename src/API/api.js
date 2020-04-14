import axios from "axios";
export const weatherAPi = {
    async getWeather(location) {
        let response = await axios.get(`https://api.weatherbit.io/v2.0/current?city=${location}&key=b86093d5e51e47b38a20a82777c6fc1e`)
        return response;
    }
}