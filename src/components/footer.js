import React, { Component } from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
  display: flex;
  padding: 15px;
  background-color: black;
  color: white;
  justify-content: center;
  align-items: center;
  height: auto;
  min-height: 70px;
  font-family: Source Code Pro;
  font-size: 15px;
`;

const Footer = () => (
    <FooterContainer>
      <div>Designed &amp; built by Sophia Sherman</div>
    </FooterContainer>
  );
  
  export default Footer;