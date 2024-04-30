import "./App.css";
import { Routes, Route, Navigate } from "react-router";
import Planet from "./components/Planet";
import Header from "./components/Header";
import { GlobalStyles } from "./styles/GlobalStyles";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import data from "./data.json";

function App() {
  const [open, setOpen] = useState(false);
  const [viewOption, setViewOption] = useState("overview");
  const location = useLocation();

  const path = location.pathname.split("/");
  const planetName = path[path.length - 1];

  const currentPlanet = data.find((planet) => planet.name === planetName);

  const mobileView = useMediaQuery("only screen and (max-width: 768px)");
  // const tabletView = useMediaQuery(
  //   "only screen and (min-width: 769px) and (max-width: 1440px)"
  // );
  const desktopView = useMediaQuery("only screen and (min-width: 1440px)");

  return (
    <>
      <GlobalStyles />
      <Header
        desktopView={desktopView}
        currentPlanet={currentPlanet}
        open={open}
        setOpen={setOpen}
        mobileView={mobileView}
      />
      <Routes>
        <Route path="/" element={<Navigate to={"/Earth"} />} />
        <Route
          path="/:planet"
          element={
            <Planet
              viewOption={viewOption}
              setViewOption={setViewOption}
              open={open}
              mobileView={mobileView}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
