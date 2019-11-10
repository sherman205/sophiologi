import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "./logo"

const NavbarContainer = styled.div`
  display: flex;
  padding: 10px 30px;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const NavLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 25px;
`;

const NavLinks = styled.div`
  display: flex;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

const NavListItem = styled.li`
  margin: 0 10px;
  padding: 10px 15px;
  text-align: right;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-family: Source Code Pro;
  color: inherit;
`;

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <NavbarContainer>
          <NavLogo>
            <Logo />
          </NavLogo>
          <Navbar>
            <NavLinks>
              <NavList>
                  <NavListItem>
                    <NavLink to="/">Home</NavLink>
                  </NavListItem>
                  <NavListItem>
                    <NavLink to="/page-2/">About</NavLink>
                  </NavListItem>
                  <NavListItem>
                    <NavLink to="/page-2/">Portfolio</NavLink>
                  </NavListItem>
              </NavList>
            </NavLinks>
          </Navbar>
        </NavbarContainer>
      </>
    );
  }
}

export default Nav;