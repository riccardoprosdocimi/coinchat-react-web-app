import axios from "axios";
import {Search_API} from "../../util/global-variables";


export const SearchCoin = async (query) => {
    const response = await axios.get(`${Search_API}${query}`)
    return response.data;
}