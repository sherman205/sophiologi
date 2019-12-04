import React from "react"
import styled from "styled-components"
import GithubIcon from './icons/github'
import LinkedinIcon from './icons/linkedin'
import InstaIcon from './icons/instagram'
import { media } from "../styles/media"
import { theme } from "../styles/theme"

const SocialContainer = styled.div`
  width: 30px;
  position: fixed;
  margin-right: 50px;
  bottom: 0;
  right: 0;
  margin-bottom: 200px;
  ${media.bigDesktop`margin-right: 30px;`};
  ${media.desktop`margin-right: 20px;`};
  ${media.tablet`display: none;`};
`;

const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Icon = styled.a`
  width: 100%;
  padding-top: 40px;
  svg {
    fill: ${theme.colors.lightGrey};
  }
  &:hover,
  &:focus {
    svg {
      fill: ${theme.colors.pinkBrown};
    }
  }
`;

const Social = () => {
  return (
    <SocialContainer>
      <SocialIcons>
        <Icon
          href="https://github.com/sherman205"
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="github link"
        >
          <GithubIcon />
        </Icon>
        <Icon 
          href="https://www.linkedin.com/in/sophiasherman/"
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="linkedin link"
        >
          <LinkedinIcon />
        </Icon>
        <Icon
          href="https://www.instagram.com/thealphabeetle"
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="instagram link"
        >
          <InstaIcon />
        </Icon>
      </SocialIcons>
    </SocialContainer>
  );
};

export default Social;
