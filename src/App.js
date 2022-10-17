import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./Profile";
import NavigationBar from "./NavagationBar";

function App() {
  return (
    <BrowserRouter>
        <NavigationBar active={'home'}/>
        <div className={'container-fluid'} style={{'background-color' : '#f2f2f2'}}>
            <Routes>
                <Route index
                       element={<HomeScreen/>}/>
                <Route path={'/profile'}
                       element={<ProfileScreen/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
