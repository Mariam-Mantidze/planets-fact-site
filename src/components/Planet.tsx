import data from "../data.json";
import { useParams } from "react-router";
import styled from "styled-components";
import { useState } from "react";

export default function Planet() {
  const [contentType, setContentType] = useState("overview");
  const params = useParams();

  // find current planet name
  const planetName = params.planet;

  // find current planet with name
  const currentPlanet = data.find((planetObj) => planetObj.name === planetName);

  const viewOption = currentPlanet?.viewOption;

  const filterNames = Object.keys(viewOption);

  return (
    <>
      <MobileFilter>
        {filterNames.map((filter, index) => {
          return (
            <span onClick={() => setContentType(filter)} key={index}>
              {filter.toUpperCase()}
            </span>
          );
        })}
      </MobileFilter>
      <CurrentPlanet>
        <StyledImg
          style={{ width: currentPlanet?.design.overview_mobile }}
          src={currentPlanet?.images.planet}
          alt=""
        />
      </CurrentPlanet>
      ;
    </>
  );
}

const CurrentPlanet = styled.main``;

const StyledImg = styled.img``;

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
