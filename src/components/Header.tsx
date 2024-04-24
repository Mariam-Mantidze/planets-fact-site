import data from "../data.json";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("overview");

  const toggleMenu = () => {
    setOpen((open) => !open);
  };

  return (
    <>
      <StyledHeader>
        <h1>THE PLANETS</h1>
        <svg
          onClick={toggleMenu}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="17">
          <g
            fill={open ? "rgba(255, 255, 255, 0.20)" : "rgba(255, 255, 255, 1)"}
            fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
          </g>
        </svg>

        {open ? (
          <StyledNav open={open}>
            <StyledList open={open}>
              {data.map((planet, index) => {
                return (
                  <StyledLi
                    key={index}
                    color={planet.design.color}
                    style={{ animationDelay: `${index * 0.1}s` }}>
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
        ) : (
          ""
        )}
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

  & > svg {
    cursor: pointer;
  }
`;

const StyledNav = styled.nav`
  /* animation: ${({ open }) =>
    open ? "1s slidein forwards" : "slideout 1s forwards"}; */
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100vh;
  padding: 2.4rem;
  background: rgba(7, 7, 36, 1);
  left: 0;
  top: 7.3rem;
  transition: 2s ease;

  /* @keyframes slidein {
    from {
      transform: translateX(-150%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideout {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-150%);
    }
  } */
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
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
    text-decoration: none;
  }
`;

const StyledLi = styled.li`
  font-size: 1.5rem;
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

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

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
