const Domain_address = process.env.REACT_APP_BASE_URL;

export const Search_API = `${Domain_address}/search/coinSearch?query=`;
export const CoinData_API = `${Domain_address}/detail/getCoinData?coinID=`;
export const CoinMarketChartAPI = `${Domain_address}/detail/getCoinMarketChart?coinID=`;