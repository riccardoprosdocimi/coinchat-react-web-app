import axios from "axios";
import {CoinData_API} from "../../util/global-variables";


export const getCoinData = async (coinID) => {
    if (coinID.length === 0) {
        return {}
    }
    const response = await axios.get(`${CoinData_API}${coinID}`)
    return response.data;
}