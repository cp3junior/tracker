import styled, { css } from "styled-components";

import { colors } from "../../helper/theme";

export const CardInfo = styled.h5`
  color: ${(props) => colors[props.color]};
  font-size: 15px;
  font-weight: 400;
`;

export const CardValue = styled.h2`
  color: ${colors.black};
  font-size: 30px;
  line-height: 40px;
  ${(props) =>
    props.small &&
    css`
      font-size: 20px;
      line-height: 30px;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    `}
`;
