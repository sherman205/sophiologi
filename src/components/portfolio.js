import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { media } from "../styles/media"
import { theme } from "../styles/theme"

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 10px 0 200px;
  max-width: 1000px;
  ${media.tablet`height: 100%;`};
  ${media.tablet`padding: 20px 0 50px;`};
  ${media.phablet`height: 100vh;`};
  ${media.phone`height: 100vh;`};
`;

const PortfolioHeader = styled.h3`
  margin: 0;
  font-size: 30px;
  font-family: Source Code Pro;
  text-align: center;
  ${media.tablet`font-size: 20px;`};
`;

const PortfolioItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

const PortfolioFolder = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 700px;
  height: 400px;
  ${media.tablet`width: 500px;`};
`;

const PortfolioLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const LeftPane = styled.div`
  width: 50%;
  padding: 20px;
`;

const RightPane = styled.div`
  width: 50%;
  padding: 20px;
`;

const Topic = styled.p`
  font-size: 25px;
  padding-left: 30px;
`;

const Description = styled.div`
  font-size: 15px;
  padding-left: 30px;
`;

const Image = styled(Img)`
  opacity: 0.6;
  z-index: -1;
  height: 100%;
  width: 100%;
`;

const Linearicon = styled.span`
  display: flex;
  justify-content: flex-start;
  &:before {
    font-size: 30px;
  }
`;

const PaperClipLinearicon = styled(Linearicon)`
  &:before {
    content: "\\e998";
  }
`;

const Portfolio = ( {data} ) => {
  return (
    <PortfolioContainer>
      <PortfolioHeader>Portfolio</PortfolioHeader>
      <PortfolioItems>
        {data.map(({ node }, i) => {
          const { frontmatter, html } = node;
          const { title, image, quote, quoteAuthor } = frontmatter;
          return (
            <PortfolioLink to={`/portfolio/${title.toLowerCase()}`}>
              <PortfolioFolder>
                <LeftPane>
                  <PaperClipLinearicon className="linearicons-paperclip"></PaperClipLinearicon>
                  <Topic>{title}</Topic>
                  <Description dangerouslySetInnerHTML={{ __html: html }} />
                </LeftPane>
                <RightPane>
                  <Image fluid={image.childImageSharp.fluid} />
                </RightPane>
              </PortfolioFolder>
            </PortfolioLink>
          );
        })}
      </PortfolioItems>
    </PortfolioContainer>
  );
};

  
export default Portfolio;