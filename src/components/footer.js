import React, { Component } from "react"
import styled from "styled-components"
import { media } from "../styles/media"
import { theme } from "../styles/theme"

const FooterContainer = styled.footer`
  display: flex;
  padding: 15px;
  justify-content: center;
  align-items: center;
  height: auto;
  border-top: 1px solid ${theme.colors.lightGrey};
  min-height: 150px;
  font-family: Source Code Pro;
  font-size: 15px;
  ${media.tablet`font-size: 10px;`};
  ${media.tablet`min-height: 100px;`};
`;

const Footer = () => (
    <FooterContainer>
      <div>Designed &amp; built by Sophia Sherman</div>
      <div>
      </div>
    </FooterContainer>
  );
  
  export default Footer;