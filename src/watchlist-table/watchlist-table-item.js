import {json, Link} from "react-router-dom";
import coinData from "../data/coin-detail/coin-data";
import {getCoinData, getCoinMC} from "../detail-screen/service/detail-service";
import coinDataReducer from "../detail-screen/service/reducers/coin-data-reducer";
import {useSelector} from "react-redux";
import {CoinDataThunk, CoinMCThunk} from "../detail-screen/service/detail-thunks";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {CoinData_API} from "../util/global-variables";

const moneyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
})
const percentFormat = new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
})

const WatchlistTableItem =({item}) => {
    // Source: https://reactjs.org/docs/faq-ajax.html
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [coin, setCoin] = useState(null);
    useEffect(() => {
        fetch(`${CoinData_API}${item.coinId}`)
            .then(res => res.json())
            .then((result) => {
                    setIsLoaded(true);
                    setCoin(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return(
            <tr>
                <th scope="row">
                    <Link to={`/detail?coinID=${item.coinId}`} style={{textDecoration: 'none', color: 'black'}}>
                        <img className={'float-start pe-1 pt-1'} height={24} src={coin.image.large} alt=""/>
                        {coin.symbol.toUpperCase()}
                    </Link>
                </th>
                <td className={`text-center ${coin.market_data.price_change_percentage_24h > 0 ? 
                                              'text-success' : '' 
                                                               || coin.market_data.price_change_percentage_24h < 0 ? 
                                              'text-danger' : '' 
                                                              || coin.percentChange === 0 ? 
                                                              'text-secondary' : ''}`}>
                    {coin.market_data.price_change_percentage_24h > 0 ? '+' : ''}
                    {percentFormat.format(coin.market_data.price_change_percentage_24h / 100)}
                </td>
                <td className={'text-center'}>
                    {moneyFormat.format(coin.market_data.current_price.usd)}
                </td>
                <td className={'text-center'}>
                    <i className={'bi bi-x-lg'}></i>
                </td>
            </tr>
        )
    }
}
export default WatchlistTableItem