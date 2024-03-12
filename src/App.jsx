import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="bg-white">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
