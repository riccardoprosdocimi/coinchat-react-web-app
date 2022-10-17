const WatchListTableItem =(
    {
        item = {
            "symbol" : "BTC",
            "coinDetails" : "#",
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
            <th scope="row" className={'text-center'}>
                <a className="nav-link rounded-3 me-2" href={item.coinDetails}>
                    {item.symbol}
                </a>
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
        </tr>
    )
}
export default WatchListTableItem