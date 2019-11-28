import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from "../styles/media";
import { theme } from "../styles/theme";

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  outline: 0;
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)';
  transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
  visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
  display: none;
  ${media.tablet`display: block;`};
`;
const Sidebar = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  flex-direction: column;
  transition: transform .5s cubic-bezier(0, .5, 0, 1);
  background-color: ${theme.colors.pinkBrown};
  box-shadow: -10px 0px 30px -15px ${theme.colors.pinkBrown};
  padding: 50px;
  width: 50vw;
  height: 100%;
  position: relative;
  right: 0;
  margin-left: 80px;
  font-family: 'Source Code Pro';
  ${media.thone`padding: 25px;`};
  ${media.phablet`width: 75vw;`};
  ${media.tiny`padding: 10px;`};
`;
const NavLinks = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-direction: column;
  text-align: center;
  color: ${theme.colors.white};
`;
const NavList = styled.ul`
  width: 100%;
  list-style: none;
`;
const NavListItem = styled.li`
  margin: 0 auto 20px;
  position: relative;
  font-size: 18px;
  ${media.thone`
    margin: 0 auto 10px;
    font-size: 16px;
  `};
  ${media.tiny`font-size: 13px;`};
  &:before {
    display: block;
    color: ${theme.colors.white};
    font-size: 14px;
    margin-bottom: 5px;
  }
`;
const NavLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  color: inherit;
  position: relative;
  padding: 3px 20px 20px;
  width: 100%;
`;

const Menu = ({ menuOpen, toggleMenu }) => {
  const handleMenuClick = e => {
    const target = e.target;
    const isLink = target.hasAttribute('href');
    // const isNotMenu = target.classList && target.classList[0].includes('StyledContainer');
    const isNotMenu = true;
    console.log(target)
    console.log(isLink)
    console.log(isNotMenu)
    console.log(target.classList[0])
    console.log(e.target.className)
    if (isLink || isNotMenu) {
      toggleMenu();
    }
  };

  return (
    <StyledContainer
      menuOpen={menuOpen}
      onClick={handleMenuClick}
      aria-hidden={!menuOpen}
      tabIndex={menuOpen ? 1 : -1}>
      <Sidebar>
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
      </Sidebar>
    </StyledContainer>
  );
};

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default Menu;