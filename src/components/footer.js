import React, { Component } from "react"
import styled from "styled-components"
import GithubIcon from './icons/github'
import LinkedinIcon from './icons/linkedin'
import InstaIcon from './icons/instagram'
import { media } from "../styles/media"
import { theme } from "../styles/theme"

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
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

const LogoText = styled.div`
  font-size: 25px;
  color: ${theme.colors.clay};
  ${media.phone`font-size: 20px;`};
`;

const Social = styled.div`
  display: flex;
  flex-direction: row;
`;

const SocialLink = styled.a`
  width: 100%;
  padding: 10px;
  svg {
    fill: ${theme.colors.lightGrey};
    height: 20px;
    width: 20px;
  }
`;

const Footer = () => (
    <FooterContainer>
      <LogoText>Sophiologi</LogoText>
      <Social>
        <SocialLink
          href="https://github.com/sherman205"
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="github link"
        >
          <GithubIcon />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/sophiasherman/"
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="linkedin link"
        >
          <LinkedinIcon />
        </SocialLink>
        <SocialLink
          href="https://www.instagram.com/thealphabeetle"
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="instagram link"
        >
          <InstaIcon />
        </SocialLink>
      </Social>
      <div>Designed &amp; built by Sophia Sherman</div>
      <div>
      </div>
    </FooterContainer>
  );
  
  export default Footer;