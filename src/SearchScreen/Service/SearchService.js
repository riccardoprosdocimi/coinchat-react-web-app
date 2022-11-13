import axios from "axios";
import {Search_API} from "../../Util/GlobalVariables";


export const SearchCoin = async (query) => {
    if (query.length === 0) {
        return []
    }
    const response = await axios.get(`${Search_API}${query}`)
    return response.data;
}