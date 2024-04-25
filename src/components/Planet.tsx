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
  mobileView: boolean;
  tabletView: boolean;
  desktopView: boolean;
};

export default function Planet({
  viewOption,
  setViewOption,
  open,
  setOpen,
  mobileView,
  tabletView,
  desktopView,
}: PlanetProps) {
  const params = useParams();

  // find current planet name
  const planetName = params.planet;

  // find current planet with name
  const currentPlanet = data.find((planetObj) => planetObj.name === planetName);

  const combinedKey = `${viewOption}-${open}`;

  const viewOptionArr = ["overview", "structure", "surface"];
  const viewOptionsBigScreen = [
    "01 overview",
    "02 internal structure",
    "03 surface geology",
  ];

  return (
    <>
      {mobileView && (
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
      )}

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
              currentPlanet={currentPlanet}
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

          <motion.div className="info-and-viewOption-container">
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
            {!mobileView && (
              <div className="viewOption-container">
                {viewOptionsBigScreen.map((option, index) => {
                  return (
                    <div key={index}>
                      <p>{option}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>

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
        </div>
      </CurrentPlanet>
    </>
  );
}

const CurrentPlanet = styled.main`
  /* display: flex; */
  /* justify-content: center; */
  margin-top: 6rem;
  padding: 0 2.4rem;

  @media (min-width: 768px) {
    margin-top: 10rem;
  }

  & .planet-and-info-container {
    @media (min-width: 768px) {
      padding: 4rem;
    }
  }

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

    @media (min-width: 768px) {
      width: 8rem;
      bottom: -4rem;
    }

    @media (min-width: 1440px) {
      width: 13.325rem;
      bottom: -8rem;
    }
  }

  & .info-and-viewOption-container {
    margin-top: 5rem;
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      gap: 6.9rem;
      justify-content: space-between;
      margin-top: ;
    }

    & .info-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: rgba(255, 255, 255, 1);
      font-weight: 400;

      @media (min-width: 768px) {
        align-items: flex-start;
        width: 33.9rem;
      }

      & > h2 {
        font-size: 4rem;
        font-weight: 400;
        line-height: 5.176rem;

        @media (min-width: 768px) {
          font-size: 4.8rem;
        }
        @media (min-width: 1400px) {
          font-size: 8rem;
        }
      }

      & > p {
        font-family: "League Spartan", sans-serif;
        font-size: 1.1rem;
        line-height: 2.2rem;
        text-align: center;
        opacity: 50%;
        margin-top: 1.6rem;

        @media (min-width: 768px) {
          text-align: start;
          margin-top: 2.4rem;
        }

        @media (min-width: 1440px) {
          text-align: start;
          margin-top: 2.3rem;
          font-size: 1.4rem;
        }
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
        margin-top: 3.2rem;

        @media (min-width: 768px) {
          margin-top: 4.4rem;
        }

        @media (min-width: 1440px) {
          margin-top: 2.4rem;
          font-size: 1.4rem;
        }

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

    & > .viewOption-container {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      cursor: pointer;

      & div {
        width: 28.1rem;

        &:hover {
          background: rgba(216, 216, 216, 20%);
        }
      }
      & p {
        border: 1px solid rgba(255, 255, 255, 20%);
        font-family: "League Spartan", sans-serif;
        font-size: 1.1rem;
        font-weight: 700;
        line-height: 2.5rem;
        letter-spacing: 1.9285714626312256px;
        padding: 0.8rem 2rem;
        color: rgba(255, 255, 255, 1);
      }
    }
  }

  & .planet-number-facts-container {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-top: 2.8rem;

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 1.1rem;
      /* flex-direction: row;
      gap: 1.1rem; */
    }

    & > .planet-number-facts-box {
      border: 1px solid rgba(255, 255, 255, 20%);
      padding: 0.9rem 2.4rem 1.3rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media (min-width: 768px) {
        flex-direction: column;
        gap: 0.6rem;
        align-items: flex-start;

        padding: 1.6rem 1.9rem 1.5rem;
      }

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
  width: ${(props) => props.currentPlanet.design.overview_mobile};

  @media (min-width: 768px) {
    width: ${(props) => props.currentPlanet.design.overview_tablet};
  }

  @media (min-width: 1440px) {
    width: ${(props) => props.currentPlanet.design.overview_desktop};
  }
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
