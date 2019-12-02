import React, { Component } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { media } from "../styles/media";
import { theme } from "../styles/theme";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 10px 0 200px;
  height: calc(100vh - 400px);
  max-width: 1000px;
  ${media.desktop`height: 100vh;`};
`;

const AboutHeader = styled.h3`
  margin: 0;
  font-size: 30px;
  font-family: Source Code Pro;
  text-align: center;
`;

const AboutContent = styled.div`
  display: flex;
  padding: 50px;
  ${media.desktop`display: block;`};
  ${media.tablet`padding: 10px;`};
`;

const Image = styled(Img)`
  opacity: 0.6;
  z-index: -1;
  width: 100%;
  ${media.tablet`width: 100%;`};
`;

const AboutTextContainer = styled.div`
  flex-shrink: 1.5;
`;

const QuickInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuickInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const QuickText = styled.p`
  font-size: 15px;
  font-family: Source Code Pro
`;

const Linearicon = styled.span`
  &:before {
    font-size: 30px;
  }
`;

const PushPinLinearicon = styled(Linearicon)`
  &:before {
    content: "\\ea79";
    padding: 30px;
  }
`;

const GradLinearicon = styled(Linearicon)`
  &:before {
    content: "\\e9da";
    padding: 30px;
  }
`;

const TextLinearicon = styled(Linearicon)`
  &:before {
    content: "\\eca2";
    padding: 30px;
  }
`;

const AboutText = styled.p`
  padding: 10px 30px 10px;
  font-size: 15px;
  line-height: 20px;
`;

const About = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title, image, location, education, languages, quote, quoteAuthor } = frontmatter;
  return (
    <AboutContainer>
      <AboutHeader>{title}</AboutHeader>
      <AboutContent>
        <Image fluid={image.childImageSharp.fluid} />
        <AboutTextContainer>
          <QuickInfo>
            <QuickInfoWrapper>
              <PushPinLinearicon className="linearicons-pushpin2"></PushPinLinearicon>
              <QuickText>{location}</QuickText>
            </QuickInfoWrapper>
            <QuickInfoWrapper>
              <GradLinearicon className="linearicons-graduation-hat"></GradLinearicon>
              <QuickText>{education}</QuickText>
            </QuickInfoWrapper>
            <QuickInfoWrapper>
              <TextLinearicon className="linearicons-text-size"></TextLinearicon>
              {languages.map((lang, i) => {
                return (
                  <>
                    {i > 0 && ', '}
                    &nbsp;<QuickText key={i}>{lang}</QuickText>
                  </>
                );
              })}
            </QuickInfoWrapper>
          </QuickInfo>
          <AboutText dangerouslySetInnerHTML={{ __html: html }} />
        </AboutTextContainer>
      </AboutContent>
    </AboutContainer>
  );
};

  
export default About;