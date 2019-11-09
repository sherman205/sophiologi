import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "../fonts/fonts.css"

const NavbarContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 30px;
`;

const Navbar = styled.div`
  width: 100%;
  text-align: right;
`;

const NavLinks = styled.div`
  align-items: center;
`;

const NavList = styled.ul`
  list-style: none;
`;

const NavListItem = styled.li`
  margin: 0 10px;
  padding: 10px 15px;
  display: inline-block;
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