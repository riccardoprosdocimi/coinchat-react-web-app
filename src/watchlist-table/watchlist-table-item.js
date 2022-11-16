import {Link} from "react-router-dom";
import coinData from "../data/coin-detail/coin-data";

const WatchlistTableItem =(
    {
        item = {
            "coinId": "bitcoin",
            "symbol" : "BTC",
            "coinDetails" : "details",
            "icon" : "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579",
            "percentChange" : 1.03,
            "currentPrice" : 403428.21,
        }
    }
) => {
    const moneyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })
    const percentFormat = new Intl.NumberFormat('en-US', {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
    return(
        <tr>
            <th scope="row">
                <Link to={`/detail?coinID=${item.coinId}`} style={{textDecoration: 'none', color: 'black'}}>
                    <img className={'float-start pe-1 pt-1'} height={24} src={item.icon} alt=""/>
                    {item.symbol}
                </Link>
            </th>
            <td className={`text-center ${item.percentChange > 0 ? 'text-success' : '' ||
                item.percentChange < 0 ? 'text-danger' : '' ||
                item.percentChange === 0 ? 'text-secondary' : ''}`}>
                {item.percentChange > 0 ? '+' : ''}
                {percentFormat.format(item.percentChange/100)}
            </td>
            <td className={'text-center'}>
                {moneyFormat.format(item.currentPrice)}
            </td>
            <td className={'text-center'}>
                <i className={'bi bi-x-lg'}></i>
            </td>
        </tr>
    )
}
export default WatchlistTableItem