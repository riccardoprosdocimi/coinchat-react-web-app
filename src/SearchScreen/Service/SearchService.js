import axios from "axios";
import {Search_API} from "../../Util/GlobalVariables";


export const findMovieBySearchTerm = async (term) => {
    const response = await axios.get(`${Search_API}${term}`)
    return response.data;
}