import axios from "axios";
import {Home_API} from "../util/global-variables";

const API_BASE = process.env.REACT_APP_API_BASE

export const getTrendingCoins = async () => {
    const response = await axios.get(`${API_BASE}/home/trendingCoins`)
    return response.data;



}