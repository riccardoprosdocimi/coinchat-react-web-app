import watchListArray from './watch-list-items.json';
import WatchListTableItem from "./watch-list-table-item";

function WatchListTable() {
    return (
        <div className="wd-bg-watchlist rounded-3">
            <h3 className="text-decoration-underline fw-bold pt-2 text-center">
                WatchList
            </h3>
            <table className="table table-responsive table-hover border-dark mb-0">
                <thead>
                <tr>
                    <th scope="col" className={'text-center'}>Coin</th>
                    <th scope="col" className={'text-center'}>24H Change</th>
                    <th scope="col" className={'text-center'}>Current Price</th>
                </tr>
                </thead>
                <tbody>
                {
                    watchListArray.map(item =>
                        <WatchListTableItem item={item}/>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default WatchListTable