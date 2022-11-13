import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import HomeScreen from "./HomeScreen";
import ProfileScreen from "./Profile";
import NavigationBar from "./NavagationBar";
import SearchScreen from "./SearchScreen";
import DetailScreen from "./DetailScreen";
import EditProfile from "./EditProfile";
import {configureStore} from "@reduxjs/toolkit";
import profileReducer from "./Profile/reducers/profile-reducer";
import {Provider} from "react-redux";

const store = configureStore(
    {
        reducer: {
            profile: profileReducer,
        }
    }
)

function App() {
    document.body.style.background = '#f2f2f2'
  return (
      <Provider store={store}>
          <BrowserRouter>
            <NavigationBar />
            <div className={'container-fluid'}>
                <Routes>
                    <Route index
                           element={<HomeScreen/>}/>
                    <Route path={'/profile'}
                           element={<ProfileScreen/>}/>
                    <Route path={'/edit-profile'}
                           element={<EditProfile/>}/>
                    <Route path={"/search"}
                           element={<SearchScreen />}/>
                    <Route path={"/detail"}
                           element={<DetailScreen />}/>
                </Routes>
            </div>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
