import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { WeatherContextProvider } from "./context/weather";

function App() {
  return (
    <WeatherContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </WeatherContextProvider>
  );
}

export default App;
