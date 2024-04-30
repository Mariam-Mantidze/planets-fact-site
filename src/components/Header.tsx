import data from "../data.json";
import { Link } from "react-router-dom";
import styled from "styled-components";

type HeaderTypes = {
  desktopView: boolean;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mobileView: boolean;
  currentPlanet: {};
};

interface StyledNavProps {
  open: boolean;
}

export default function Header({
  desktopView,
  open,
  setOpen,
  mobileView,
  currentPlanet,
}: HeaderTypes) {
  const toggleMenu = () => {
    setOpen((open) => !open);
  };

  return (
    <>
      <StyledHeader>
        <h1>THE PLANETS</h1>
        {mobileView && (
          <svg
            onClick={toggleMenu}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="17">
            <g
              fill={
                open ? "rgba(255, 255, 255, 0.20)" : "rgba(255, 255, 255, 1)"
              }
              fillRule="evenodd">
              <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
            </g>
          </svg>
        )}

        <StyledNav open={open}>
          <StyledList>
            {data.map((planet, index) => {
              const isActive = planet === currentPlanet;
              return (
                <StyledLi
                  isActive={isActive}
                  onClick={toggleMenu}
                  key={index}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    borderTop:
                      desktopView &&
                      planet === currentPlanet &&
                      `4px solid ${currentPlanet?.design?.color} `,
                  }}>
                  <div className="planet-box">
                    <Link to={`/${planet.name}`}>
                      {mobileView && (
                        <PlanetCircle
                          color={planet.design.color}></PlanetCircle>
                      )}
                    </Link>
                    <Link
                      to={`/${planet.name}`}
                      style={{
                        color: isActive
                          ? "rgba(255, 255, 255, 1)"
                          : "rgba(255, 255, 255, 50%)",
                      }}>
                      {planet.name.toUpperCase()}
                    </Link>
                  </div>

                  <Link to={`/${planet.name}`}>
                    {mobileView && (
                      <svg
                        className="arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="8">
                        <path
                          fill="none"
                          stroke="#FFF"
                          opacity=".4"
                          d="M1 0l4 4-4 4"
                        />
                      </svg>
                    )}
                  </Link>
                </StyledLi>
              );
            })}
          </StyledList>
        </StyledNav>
      </StyledHeader>
    </>
  );
}

const StyledHeader = styled.header`
  padding: 1.6rem 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 20%);

  @media (min-width: 769px) {
    flex-direction: column;
    align-items: center;
    gap: 3.9rem;
    padding: 3.2rem 5.2rem 2.7rem;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    /* padding: 2.2rem 4.1rem 2rem 3.2rem; */
  }

  & > h1 {
    font-family: "Antonio", sans-serif;
    font-size: 2.8rem;
    font-weight: 400;
    line-height: 3.623rem;
    /* text-align: left; */

    @media (min-width: 1440px) {
      /* flex-wrap: nowrap; */
      padding: 2.2rem 0 2.7rem 3.2rem;
    }
  }

  & > svg {
    cursor: pointer;
  }
`;

const StyledNav = styled.nav<StyledNavProps>`
  display: ${(props) => (props.open ? "flex" : "none")};
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100vh;
  padding: 2.4rem;
  background: rgba(7, 7, 36, 1);
  left: 0;
  top: 7.3rem;

  @media (min-width: 769px) {
    display: flex;
    transform: none;
    position: static;
    height: initial;
    padding: 0;
  }

  @media (min-width: 1440px) {
    width: unset;
  }
`;

const StyledList = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  /* gap: 3.3rem; */
  list-style: none;
  font-family: "League Spartan", sans-serif;
  width: 100%;
  cursor: pointer;

  a:-webkit-any-link {
    /* color: rgba(255, 255, 255, 1); */
    cursor: pointer;
    text-decoration: none;
    font-size: 1.1rem;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-evenly;
    opacity: 75%;
  }

  @media (min-width: 1440px) {
    justify-content: flex-end;
    gap: 3.3rem;
  }
`;

const StyledLi = styled.li`
  /* font-size: 1.5rem; */
  font-weight: 700;
  line-height: 2.5rem;
  letter-spacing: 0.136rem;
  border-bottom: 1px solid rgba(255, 255, 255, 10%);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  animation: fadeIn 1s ease;
  animation-fill-mode: both;
  opacity: 0;

  @media (min-width: 769px) {
    border: none;
    padding: 0;
    justify-content: center;
    font-size: 1.1rem;
  }

  @media (min-width: 1440px) {
    width: unset;
    padding: ${(props) => (props.isActive ? "2.9rem 0.7rem" : "3.3rem 0.7rem")};
  }
  /* padding-top: 4rem; */

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  & .planet-box {
    display: flex;
    align-items: center;
    gap: 24px;

    @media (min-width: 1440px) {
      gap: 0;
    }
  }
`;

const PlanetCircle = styled.div`
  width: 2rem;
  height: 2rem;
  background: ${(props) => props.color};
  border-radius: 50%;
`;
