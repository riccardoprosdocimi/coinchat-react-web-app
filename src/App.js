import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import HomeScreen from "./home";
import ProfileScreen from "./profile";
import NavigationBar from "./navigation-bar";
import SearchScreen from "./search";
import DetailScreen from "./detail-screen";
import LoginScreen from "./login";
import EditProfile from "./edit-profile";
import {configureStore} from "@reduxjs/toolkit";
import profileReducer from "./profile/reducers/profile-reducer";
import {Provider} from "react-redux";
import CoinDataReducer from "./detail-screen/service/reducers/coin-data-reducer";
import CoinMarketChartReducer from "./detail-screen/service/reducers/coin-market-chart-reducer";
import RegisterScreen from "./register";
import WatchlistReducer from "./watchlist-table/reducers/watchlist-reducer";

const store = configureStore(
    {
        reducer: {
            profile: profileReducer,
            coinData: CoinDataReducer,
            coinMarketChart: CoinMarketChartReducer,
            watchlist: WatchlistReducer,
        }
    }
);

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <NavigationBar/>
                <div className={'container-fluid'}>
                    <Routes>
                        <Route index
                               element={<HomeScreen/>}/>
                        <Route path={'/profile'}
                               element={<ProfileScreen/>}/>
                        <Route path={'/edit-profile'}
                               element={<EditProfile/>}/>
                        <Route path={"/search"}
                               element={<SearchScreen/>}/>
                        <Route path={"/detail/*"}
                               element={<DetailScreen/>}/>
                        <Route path={"/login"}
                               element={<LoginScreen/>}/>
                        <Route path={"/register"}
                               element={<RegisterScreen/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;