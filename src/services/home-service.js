import axios from "axios";
import {Home_API} from "../util/global-variables";

export const getTrendingCoins = async () => {
    const response = await axios.get(Home_API)
    const coins = response.data;
    return coins;
}