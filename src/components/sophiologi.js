import React from 'react';
import styled from 'styled-components';
import { media } from "../styles/media";
import { theme } from "../styles/theme";

const SophiologiContainer = styled.div`
  width: 40px;
  position: fixed;
  margin-left: 50px;
  bottom: 0;
  margin-bottom: 120px;
  ${media.bigDesktop`margin-left: 30px;`};
  ${media.desktop`margin-left: 20px;`};
  ${media.tablet`display: none;`};
`;

const SophiologiText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  writing-mode: vertical-rl;
  text-orientation: upright;
  font-family: Source Code Pro;
  font-size: 40px;
  letter-spacing: 1px;
  color: ${theme.colors.lightGrey};
`;

const Sophiologi = () => {
  return (
    <SophiologiContainer>
      <SophiologiText>
        Sophiologi
      </SophiologiText>
    </SophiologiContainer>
  );
};

export default Sophiologi;