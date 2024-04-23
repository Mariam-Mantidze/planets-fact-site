import data from "../data.json";
import { useParams } from "react-router";
import styled from "styled-components";

export default function Planet() {
  const params = useParams();
  // console.log(params);

  // find current planet name
  const planetName = params.planet;

  // find current planet with name
  const currentPlanet = data.find((planetObj) => planetObj.name === planetName);

  console.log(currentPlanet);

  return <CurrentPlanet>{currentPlanet?.name}</CurrentPlanet>;
}

const CurrentPlanet = styled.h1`
  font-size: 100px;
`;
