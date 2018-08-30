import styled from 'styled-components';

import Content from '../components/Content';

import { mediaUp, mediaDown } from '../styles/theme';

const ExchangePromoContent = styled(Content)`
  flex-flow: column;

  ${mediaDown.tablet`
    flex-basis: 0;
  `};

  ${mediaUp.tablet`
    flex-flow: row;
  `};
`;

export default ExchangePromoContent;
