import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navigation} from "./Components/navigation";
import Students from "./Components/students/students";
import About from "./Components/about";
import Error from "./Components/error";

function App() {
    return (
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path="" element={<About/>}/>
                <Route path="/students" element={<Students/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/error" element={<Error/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
