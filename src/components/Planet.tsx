import data from "../data.json";
import { useParams } from "react-router";

export default function Planet() {
  const params = useParams();
  // console.log(params);

  // find current planet name
  const planetName = params.planet;

  // find current planet with name
  const currentPlanet = data.find((planetObj) => planetObj.name === planetName);

  console.log(currentPlanet);

  return <div>{currentPlanet?.name}</div>;
}
