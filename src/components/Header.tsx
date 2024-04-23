import data from "../data.json";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Menu from "/starter-code/assets/icon-hamburger.svg";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((open) => !open);
  };

  return (
    <>
      <StyledHeader>
        <h1>THE PLANETS</h1>
        <img
          open={open}
          onClick={toggleMenu}
          src={Menu}
          alt="burger-menu icon"
        />

        <StyledNav open={open}>
          <StyledList open={open}>
            {data.map((planet, index) => {
              return (
                <StyledLi key={index} color={planet.design.color}>
                  <div className="planet-box">
                    <PlanetCircle color={planet.design.color}></PlanetCircle>
                    <Link to={`/${planet.name}`}>{planet.name}</Link>
                  </div>
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

  & > h1 {
    font-family: "Antonio", sans-serif;
    font-size: 2.8rem;
    font-weight: 400;
    line-height: 3.623rem;
    text-align: left;
  }

  & > img {
    cursor: pointer;
  }
`;

const StyledNav = styled.nav`
  display: ${({ open }) => (open ? "flex" : "none")};
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100vh;
  padding: 24px 44px;
  background: rgba(7, 7, 36, 1);
  left: 0;
  top: 7.3rem;
`;

const StyledList = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 3.3rem;
  list-style: none;
  font-family: "League Spartan", sans-serif;
  width: 100%;

  a:-webkit-any-link {
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
    text-decoration: none;
  }
`;

const StyledLi = styled.li`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.5rem;
  letter-spacing: 1.3636363744735718px;
  border-bottom: 1px solid rgba(255, 255, 255, 10%);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  & .planet-box {
    display: flex;
    align-items: center;
    gap: 24px;
  }
`;

const PlanetCircle = styled.div`
  width: 2rem;
  height: 2rem;
  background: ${(props) => props.color};
  border-radius: 50%;
`;
