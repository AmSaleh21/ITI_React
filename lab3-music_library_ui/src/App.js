import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Navigation from "./Components/core/Navigation"
import Cover from "./Components/library/cover/Cover"
import AllSingers from "./Components/library/AllSingers";
import Singer from "./Components/library/Singer";
import About from "./Components/core/About";
import Error from "./Components/core/Error";

function App() {
    return (
        <div className={'container'}>
            <BrowserRouter>
                <Navigation/>
                <Routes>
                    <Route path={""} element={<Cover/>}/>
                    <Route path={"artists"} element={<AllSingers/>}/>
                    <Route path={"artists/:id"} element={<Singer/>}></Route>
                    <Route path={"about"} element={<About/>}></Route>
                    <Route path={'*'} element={<Error/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
