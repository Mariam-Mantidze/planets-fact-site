import data from "../data.json";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Menu from "/starter-code/assets/icon-hamburger.svg";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledHeader>
        <h1>THE PLANETS</h1>
        <img
          open={open}
          onClick={() => setOpen(!open)}
          src={Menu}
          alt="burger-menu icon"
        />

        <StyledNav open={open}>
          <StyledList open={open}>
            {data.map((planet, index) => {
              return (
                <li key={index}>
                  <Link to={`/${planet.name}`}>{planet.name}</Link>
                </li>
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
  display: flex;
  position: fixed;
  z-index: 2;
  left: 2.4rem;
  top: 11.3rem;
`;

const StyledList = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 3.3rem;
  list-style: none;
  font-family: "League Spartan", sans-serif;

  & > li {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.5rem;
    text-align: center;
    letter-spacing: 1.3636363744735718px;
  }

  a:-webkit-any-link {
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
    text-decoration: none;
  }
`;
