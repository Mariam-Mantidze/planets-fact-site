import data from "../data.json";
import { useParams } from "react-router";
import styled from "styled-components";
import { useState } from "react";

export default function Planet() {
  const [viewOption, setViewOption] = useState("overview");
  const params = useParams();

  // find current planet name
  const planetName = params.planet;

  // find current planet with name
  const currentPlanet = data.find((planetObj) => planetObj.name === planetName);

  // const currentViewOption = currentPlanet?.viewOption;

  // const filterNames = Object.keys(currentViewOption);

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
          <div className="img-container">
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
          </div>

          <div className="info-and-viewOption-container">
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

            <div className="view-option-container"></div>
          </div>
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
