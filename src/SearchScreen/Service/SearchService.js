import axios from "axios";
import {Search_API} from "../../Util/GlobalVariables";


export const SearchCoin = async (query) => {
    const response = await axios.get(`${Search_API}${query}`)
    return response.data;
}