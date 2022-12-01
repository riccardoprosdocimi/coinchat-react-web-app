import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import NavigationBar from "./navigation-bar";
import HomeScreen from "./home";
import RegisterScreen from "./register";
import LoginScreen from "./login";
import ProfileScreen from "./profile";
import EditProfile from "./edit-profile";
import SearchScreen from "./search";
import DetailScreen from "./detail-screen";
import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./reducers/users-reducer";
import profileReducer from "./reducers/profile-reducer";
import CoinDataReducer from "./reducers/coin-data-reducer";
import CoinMarketChartReducer from "./reducers/coin-market-chart-reducer";
import CurrentUser from "./users/current-user";
import WatchlistReducer from "./reducers/watchlist-reducer";

const store = configureStore({
     reducer: {
         users: usersReducer,
         profile: profileReducer,
         coinData: CoinDataReducer,
         coinMarketChart: CoinMarketChartReducer,
         watchlist: WatchlistReducer,
     }
 });

function App() {
    return (
        <Provider store={store}>
            <CurrentUser>
                <BrowserRouter>
                    <NavigationBar/>
                    <div className={'container-fluid'}>
                        <Routes>
                            <Route index
                                   element={<HomeScreen/>}/>
                            <Route path={'/profile/*'}
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
            </CurrentUser>
        </Provider>
    );
}

export default App;