import React, { Component } from "react"
import { Link } from "gatsby"
import Helmet from 'react-helmet';
import styled from "styled-components"
import { media } from "../styles/media";
import { theme } from "../styles/theme";
import Logo from "./logo"
import Menu from "./menu"

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px;
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
  ${media.tablet`margin: 0;`};
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

const Hamburger = styled.div`
  position: absolute;
  right: 20px;
  overflow: visible;
  margin: 0 -12px 0 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
  display: none;
  ${media.tablet`display: flex;`};
`;

const HamburgerBox = styled.div`
  position: relative;
  width: 30px;
  height: 24px;
`;

const HamburgerInner = styled.div`
  z-index: 20;
  background-color: ${props => (props.menuOpen ? `${theme.colors.white}` : `${theme.colors.pinkBrown}`)};
  position: absolute;
  width:30px;
  height: 2px;
  border-radius: 3px;
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${props => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
  );
  &:before,
  &:after {
    content: '';
    display: block;
    background-color: ${props => (props.menuOpen ? `${theme.colors.white}` : `${theme.colors.pinkBrown}`)};
    position: absolute;
    left: auto;
    right: 0;
    width: 30px;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
  }
  &:before {
    width: ${props => (props.menuOpen ? `100%` : `120%`)};
    top: ${props => (props.menuOpen ? `0` : `-10px`)};
    opacity: ${props => (props.menuOpen ? 0 : 1)};
    transition: ${props => (props.menuOpen ? `top 0.1s ease-out, opacity 0.1s ease-out 0.12s` : `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`)};
  }
  &:after {
    width: ${props => (props.menuOpen ? `100%` : `80%`)};
    bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${props => (props.menuOpen ? `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s` : `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`)};
  }
`;

class Nav extends Component {
  constructor(props) {
    super(props);
    const width = typeof window !== `undefined` ? window.innerWidth : null;
    this.state = {
        width: width,
        menuOpen: false
    };
  };

  componentDidMount() {
    setTimeout(() => {
      window.addEventListener('resize', () => this.handleResize());
      window.addEventListener('keydown', e => this.handleKeydown(e));
    }, 100);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.handleResize());
    window.removeEventListener('keydown', e => this.handleKeydown(e));
  }

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleResize = () => {
    const width = typeof window !== `undefined` ? window.innerWidth : null;
    this.setState({ width: width });

    if (window.innerWidth > 768 && this.state.menuOpen) {
      this.toggleMenu();
    }
  };

  handleKeydown = e => {
    if (!this.state.menuOpen) {
      return;
    }

    if (e.which === 27 || e.key === 'Escape') {
      this.toggleMenu();
    }
  };

  render() {
    const { width, menuOpen } = this.state;
    const isMobile = width <= 768;
    return (
      <>
        <NavbarContainer>
          <Helmet>
            <body className={menuOpen ? 'noScroll' : ''} />
          </Helmet>
          <NavLogo>
            <Logo />
          </NavLogo>
          {isMobile && (
            <Hamburger onClick={this.toggleMenu}>
              <HamburgerBox>
                <HamburgerInner menuOpen={menuOpen}/>
              </HamburgerBox>
            </Hamburger>
          )}
          {!isMobile && (
            <Navbar>
              <NavLinks>
                <NavList>
                    <NavListItem>
                      <NavLink to="/">Home</NavLink>
                    </NavListItem>
                    <NavListItem>
                      <NavLink to="/about">About</NavLink>
                    </NavListItem>
                    <NavListItem>
                      <NavLink to="/about">Portfolio</NavLink>
                    </NavListItem>
                </NavList>
              </NavLinks>
            </Navbar>
          )}

          <Menu menuOpen={menuOpen} toggleMenu={this.toggleMenu} />
        </NavbarContainer>
      </>
    );
  }
}

export default Nav;