import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import HomeScreen from "./home";
import ProfileScreen from "./profile";
import NavigationBar from "./navigation-bar";
import SearchScreen from "./search";
import DetailScreen from "./detail-screen";
import LoginScreen from "./login";
import EditProfile from "./edit-profile";

function App() {
    document.body.style.background = '#f2f2f2'
    return (
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
                    <Route path={"/detail"}
                           element={<DetailScreen/>}/>
                    <Route path={"/login"}
                           element={<LoginScreen/>}/>
                    <Route path={"/register"}
                           element={<DetailScreen/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;
