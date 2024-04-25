// import { useState } from "react";
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

  return (
    <>
      <GlobalStyles />
      <Header
        open={open}
        setOpen={setOpen}
        viewOption={viewOption}
        setViewOption={setViewOption}
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
              setOpen={setOpen}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
