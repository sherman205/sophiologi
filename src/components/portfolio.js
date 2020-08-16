import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Software from "./software"
import { media } from "../styles/media"
import { theme } from "../styles/theme"

const PortfolioContainer = styled.div`
  margin: 0 auto;
  padding: 10px 0 200px;
  max-width: 1000px;
  ${media.tablet`padding: 20px 0 50px;`};
`;

const PortfolioHeader = styled.h3`
  margin: 0;
  text-align: center;
  font-size: 30px;
  font-family: Source Code Pro;
  ${media.tablet`font-size: 20px;`};
`;

const PortfolioIconContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  ${media.tablet`display: block;`};
`;

const PortfolioItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 100px;
  height: 30px;
  padding: 2rem 2rem;
  margin: 10px;
  border-radius: 5px;
  transition: all 0.25s ease;
  &:hover,
  &:focus {
    background-color: ${theme.colors.lightClay};
    border: 1px solid black;
  }
  ${media.tablet`margin: 40px auto;`};
`;

const PortfolioHeading = styled.p`
  font-family: Source Code Pro;
  font-size: 12px;
`;

const PortfolioItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

const PortfolioFolder = styled.div`
  display: flex;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 700px;
  height: 350px;
  box-shadow: 0 10px 30px -15px ${theme.colors.lightClay};
  transition: all 0.25s ease;
  &:hover,
  &:focus {
    transform: translateX(10px);
  }
  ${media.desktop`width: 550px;`};
  ${media.desktop`height: 340px;`};
  ${media.thone`width: 100%;`};
  ${media.thone`display: block;`};
  ${media.phablet`width: 350px;`};
  ${media.phone`width: 300px;`};
`;

const PortfolioLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const QuoteContainer = styled.div`
  display: flex;
  visibility: hidden;
  opacity: 0;
  align-items: center;
  border-radius: 5px;
  position: absolute;
  background-color: white;
  width: 335px;
  height: 320px;
  transition:visibility 0.3s linear,opacity 0.3s linear;
  ${media.desktop`width: 230px;`};
  ${media.thone`width: 400px;`};
  ${media.thone`height: 120px;`};
  ${media.phablet`width: 320px;`};
  ${media.phone`width: 270px;`};
`;

const Quote = styled.div`
  font-family: Source Code Pro;
  font-size: 12px;
  padding: 10px;
  text-align: center;
  ${media.phablet`font-size: 10px;`};
`;

const QuoteAuthor = styled.div`
  font-size: 12px;
  text-align: right;
  padding: 10px;
  ${media.phablet`font-size: 10px;`};
`;

const LeftPane = styled.div`
  width: 300px;
  padding: 20px;
  ${media.thone`width: 400px;`};
  ${media.thone`padding: 15px;`};
  ${media.phablet`width: 320px;`};
  ${media.phone`width: 270px;`};
`;

const RightPane = styled.div`
  width: 50%;
  padding: 20px;
  &:hover ${QuoteContainer} {
    visibility: visible;
    opacity: 1;
  }
  ${media.thone`width: 400px;`};
  ${media.thone`padding: 15px;`};
  ${media.phablet`width: 320px;`};
  ${media.phone`width: 270px;`};
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
  z-index: -2;
  border-radius: 5px;
  height: 100%;
  width: 100%;
  ${media.thone`height: 120px;`};
  ${media.phablet`height: 105px;`};
`;

const Linearicon = styled.span`
  display: flex;
  justify-content: center;
  &:before {
    font-size: 25px;
  }
`;

const PaperClipLinearicon = styled(Linearicon)`
  &:before {
    content: "\\e998";
  }
`;

const CodeLinearicon = styled(Linearicon)`
  &:before {
    content: "\\ec0b";
  }
`;

const EarthLinearicon = styled(Linearicon)`
  &:before {
    content: "\\eb84";
  }
`;

const Portfolio = ( {data} ) => {
  return (
    <PortfolioContainer>
      <PortfolioHeader>Portfolio</PortfolioHeader>
      <PortfolioIconContainer>
        <PortfolioItem>
          <CodeLinearicon className="linearicons-code"></CodeLinearicon>
          <PortfolioHeading>Software</PortfolioHeading>
        </PortfolioItem>
        <PortfolioItem>
          <EarthLinearicon className="linearicons-earth"></EarthLinearicon>
          <PortfolioHeading>Language</PortfolioHeading>
        </PortfolioItem>
      </PortfolioIconContainer>
      <Software data={data}/>
      {/* <PortfolioItems>
        {data.map(({ node }, i) => {
          const { frontmatter, html } = node;
          const { title, image, quote, quoteAuthor } = frontmatter;
          return (
            <PortfolioLink to={`/portfolio/${title.toLowerCase()}`} key={i}>
              <PortfolioFolder>
                <LeftPane>
                  <PaperClipLinearicon className="linearicons-paperclip"></PaperClipLinearicon>
                  <Topic>{title}</Topic>
                  <Description dangerouslySetInnerHTML={{ __html: html }} />
                </LeftPane>
                <RightPane>
                  <QuoteContainer>
                    <Quote>
                      "{quote}"
                      <QuoteAuthor>- {quoteAuthor}</QuoteAuthor>
                    </Quote>
                  </QuoteContainer>
                  <Image fluid={image.childImageSharp.fluid} />
                </RightPane>
              </PortfolioFolder>
            </PortfolioLink>
          );
        })}
      </PortfolioItems> */}
    </PortfolioContainer>
  );
};

  
export default Portfolio;