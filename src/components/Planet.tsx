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

  const currentViewOption = currentPlanet?.viewOption;

  const filterNames = Object.keys(currentViewOption);

  return (
    <>
      <MobileFilter>
        {filterNames.map((filter, index) => {
          return (
            <span onClick={() => setViewOption(filter)} key={index}>
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
                (viewOption === "geology" && currentPlanet?.images.planet) ||
                currentPlanet?.images.planet
              }
              alt="planet image"
            />
            {viewOption === "geology" && (
              <img
                className="geology-img"
                src={currentPlanet?.images.geology}
                alt="geology of a planet"
              />
            )}
          </div>

          <div className="info-and-viewOption-container">
            <div className="info-container">
              <h2>{currentPlanet?.name}</h2>
              <p>
                {(viewOption === "overview" &&
                  currentPlanet?.viewOption.overview.content) ||
                  (viewOption === "structure" &&
                    currentPlanet?.viewOption.structure.content) ||
                  currentPlanet?.viewOption.geology.content}
              </p>
            </div>
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
`;

const StyledImg = styled.img`
  display: block;
`;

const MobileFilter = styled.div`
  width: 100%;
  display: flex;
  /* gap: 4.3rem; */
  justify-content: space-around;
  color: rgba(255, 255, 255, 50%);
  border-bottom: 1px solid rgba(255, 255, 255, 20%);
  padding: 2rem 0;

  & span {
    font-family: "League Spartan", sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    line-height: 1.008rem;
    letter-spacing: 1.9285714626312256px;
    text-align: center;
    cursor: pointer;
  }
`;
