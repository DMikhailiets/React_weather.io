
import axios, {AxiosResponse} from "axios";
export const usersAPI = {
    async getUsers(currentPage = 1, pageSize = 10) {
        response = await axios.get('https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=b86093d5e51e47b38a20a82777c6fc1e')
            return response;
    }
}