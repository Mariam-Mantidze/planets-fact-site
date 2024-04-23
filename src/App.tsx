// import { useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router";
import Planet from "./components/Planet";
import Header from "./components/Header";
import { GlobalStyles } from "./styles/GlobalStyles";
import { useMediaQuery } from "@uidotdev/usehooks";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={"/Earth"} />} />
        {/* <Route path="/:planet" element={<Planet />} /> */}
      </Routes>
    </>
  );
}

export default App;
