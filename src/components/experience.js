import React, { Component } from "react"
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react'
import styled from "styled-components"
import { media } from "../styles/media";
import { theme } from "../styles/theme";

const ExperienceContainer = styled.div`
  display: flex;
  padding-top: 40px;
  max-width: 1000px;
`;

const TitleText = styled.h3`
  padding-bottom: 5px;
`;

const Company = styled.span`
  font-family: Source Code Pro;
`;

const Position = styled.span`
  font-size: 15px;
`;

const MyTimeline = styled(Timeline)`
  // margin: 0 !important;
`;

const Experience = ( {data} ) => {
  return (
    <ExperienceContainer>
      <MyTimeline lineColor={`${theme.colors.lightGrey}`} >
        {data.map(({ node }, i) => {
          const { frontmatter } = node;
          const { title, date, location, position, description } = frontmatter;
          return (
            <TimelineItem
              key={i}
              dateText={date}
              dateInnerStyle={{ background: `${theme.colors.lightClay}` }}
            >
              <TitleText><Company>{title}</Company>, <Position>{position}</Position></TitleText>
              <h5>{location}</h5>
              {description.map((desc, i) => (
                <p key={i}>{desc}</p>
              ))}
            </TimelineItem>
          );
        })}
      </MyTimeline>
    </ExperienceContainer>
  );
};

  
export default Experience;