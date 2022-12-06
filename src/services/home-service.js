import axios from "axios";
import {Home_API} from "../util/global-variables";

export const getTrendingCoins = async () => {
    const response = await axios.get("http://localhost:4000/home/trendingCoins")
    return response.data;



}