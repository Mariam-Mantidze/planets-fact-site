import data from "../data.json";
import { useParams } from "react-router";
import styled from "styled-components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type PlanetProps = {
  viewOption: string;
  setViewOption: React.Dispatch<React.SetStateAction<string>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Planet({
  viewOption,
  setViewOption,
  open,
  setOpen,
}: PlanetProps) {
  const params = useParams();

  // find current planet name
  const planetName = params.planet;

  // find current planet with name
  const currentPlanet = data.find((planetObj) => planetObj.name === planetName);

  const combinedKey = `${viewOption}-${open}`;

  const viewOptionArr = ["overview", "structure", "surface"];

  return (
    <>
      <MobileFilter>
        {viewOptionArr.map((filter, index) => {
          return (
            <span
              style={{
                color:
                  filter === viewOption
                    ? "rgba(255, 255, 255, 1)"
                    : "rgba(255, 255, 255, 50%)",
                borderBottom:
                  filter === viewOption
                    ? `4px solid ${currentPlanet?.design.color} `
                    : "",
              }}
              onClick={() => setViewOption(filter)}
              key={index}>
              {filter.toUpperCase()}
            </span>
          );
        })}
      </MobileFilter>
      <CurrentPlanet>
        <div className="planet-and-info-container">
          <motion.div
            key={combinedKey}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            className="img-container">
            <StyledImg
              style={{ width: currentPlanet?.design.overview_mobile }}
              src={
                (viewOption === "structure" &&
                  currentPlanet?.images.internal) ||
                (viewOption === "surface" && currentPlanet?.images.planet) ||
                currentPlanet?.images.planet
              }
              alt="planet image"
            />
            {viewOption === "surface" && (
              <img
                className="geology-img"
                src={currentPlanet?.images.geology}
                alt="geology of a planet"
              />
            )}
          </motion.div>

          <motion.div
            className="info-and-viewOption-container"
            // key={open}
            // initial={{
            //   opacity: 0,
            //   transformStyle: "preserve-3d",
            //   transform:
            //     "perspective(1000px) rotateY(-80deg) translateX(-250px)",
            // }}
            // animate={{
            //   opacity: 1,

            //   transformStyle: "preserve-3d",
            //   transform: "rotateY(0deg)  translateY(0px)",
            // }}
            // transition={{ duration: 0.8 }}
          >
            <div className="info-container">
              <h2>{currentPlanet?.name.toUpperCase()}</h2>
              <p>
                {(viewOption === "overview" &&
                  currentPlanet?.viewOption.overview.content) ||
                  (viewOption === "structure" &&
                    currentPlanet?.viewOption.structure.content) ||
                  currentPlanet?.viewOption.geology.content}
              </p>
              <span>
                Source :{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    (viewOption === "overview" &&
                      currentPlanet?.viewOption.overview.source) ||
                    (viewOption === "structure" &&
                      currentPlanet?.viewOption.structure.source) ||
                    currentPlanet?.viewOption.geology.source
                  }>
                  Wikipedia
                  <img src={"/assets/icon-source.svg"} alt="source icon" />
                </a>
              </span>
            </div>

            <div className="planet-number-facts-container">
              <div className="planet-number-facts-box">
                <p>RORATION TIME</p>
                <span>{currentPlanet?.rotation}</span>
              </div>
              <div className="planet-number-facts-box">
                <p>REVOLUTION TIME</p>
                <span>{currentPlanet?.revolution}</span>
              </div>
              <div className="planet-number-facts-box">
                <p>RADIUS</p>
                <span>{currentPlanet?.radius}</span>
              </div>
              <div className="planet-number-facts-box">
                <p>AVERAGE TEMP.</p>
                <span>{currentPlanet?.temperature}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </CurrentPlanet>
    </>
  );
}

const CurrentPlanet = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 6rem;
  padding: 0 2.4rem;

  & .img-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  & .geology-img {
    width: 6rem;
    position: absolute;
    bottom: -2rem;
  }

  & .info-container {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    color: rgba(255, 255, 255, 1);
    font-weight: 400;

    & > h2 {
      font-size: 4rem;
      font-weight: 400;
      line-height: 5.176rem;
    }

    & > p {
      font-family: "League Spartan", sans-serif;
      font-size: 1.1rem;
      line-height: 2.2rem;
      text-align: center;
      opacity: 50%;
    }

    & span {
      opacity: 50%;
      font-family: "League Spartan", sans-serif;
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 2.5rem;
      display: flex;
      align-items: center;
      gap: 0.2rem;

      & > a {
        font-weight: 700;
        color: rgba(255, 255, 255, 0.5);
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.2rem;
      }
    }
  }

  & .planet-number-facts-container {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-top: 2.8rem;

    & > .planet-number-facts-box {
      border: 1px solid rgba(255, 255, 255, 20%);
      padding: 0.9rem 2.4rem 1.3rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      & p {
        font-family: "League Spartan", sans-serif;
        font-size: 0.8rem;
        font-weight: 700;
        line-height: 1.6rem;
        letter-spacing: 0.7272727489471436px;
        color: rgba(255, 255, 255, 50%);
      }

      & span {
        font-family: "Antonio", sans-serif;
        font-size: 2rem;
        font-weight: 400;
        line-height: 25.88px;
        letter-spacing: -0.75px;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
`;

const StyledImg = styled.img`
  display: block;
`;

const MobileFilter = styled.div`
  width: 100%;
  display: flex;
  /* gap: 4.3rem; */
  justify-content: space-around;
  border-bottom: 1px solid rgba(255, 255, 255, 20%);

  & span {
    font-family: "League Spartan", sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    line-height: 1.008rem;
    letter-spacing: 1.9285714626312256px;
    text-align: center;
    cursor: pointer;
    padding: 2rem 0;
    width: 7rem;
  }
`;
