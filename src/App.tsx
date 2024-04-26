import "./App.css";
import { Routes, Route, Navigate } from "react-router";
import Planet from "./components/Planet";
import Header from "./components/Header";
import { GlobalStyles } from "./styles/GlobalStyles";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const [viewOption, setViewOption] = useState("overview");

  const mobileView = useMediaQuery("only screen and (max-width: 768px)");
  const tabletView = useMediaQuery(
    "only screen and (min-width: 769px) and (max-width: 1440px)"
  );
  const desktopView = useMediaQuery("only screen and (min-width: 1440px)");

  return (
    <>
      <GlobalStyles />
      <Header open={open} setOpen={setOpen} mobileView={mobileView} />
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
