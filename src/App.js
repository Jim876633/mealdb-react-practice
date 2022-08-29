import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Error from "./page/Error";
import SingleMeal from "./page/SingleMeal";
import Navbar from "./components/Navbar";
function App() {
    return (
        <HashRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="meal/:id" element={<SingleMeal />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
