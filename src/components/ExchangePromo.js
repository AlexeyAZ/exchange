import React from 'react';
import styled from 'styled-components';

import Text from './Text';

import generateKey from '../helpers/generateKey';

import derivatives from '../img/derivatives.svg';
import leverageUpTo100 from '../img/leverageUpTo100.svg';
import lowLatencies from '../img/lowLatencies.svg';
import lowFeesAndRebates from '../img/lowFeesAndRebates.svg';

const exchangePromoData = [
  {
    title: 'Derivatives',
    text: 'Futures provide natural summetry between longs and shorts. This allows traders to gain profits both on bullish and bearish runs without any additional fees.',
    icon: derivatives
  },
  {
    title: 'Leverage up to 100×',
    text: 'Futures trading volume on classic exchangesis 18 times larger thant he spot volumes. Crypto is still immature.',
    icon: leverageUpTo100
  },
  {
    title: 'Low latencies',
    text: 'Futures trading volume on classic exchangesis 18 times larger thant he spot volumes. Crypto is still immature',
    icon: lowLatencies
  },
  {
    title: 'Low fees and rebates',
    text: '20% of each quarter profit DERx will be spent on buying DCoin back at the market price.',
    icon: lowFeesAndRebates
  }
];

const ExchangePromoWrap = styled.div`
  background-color: ${props => props.bgColor ? props.bgColor : 'black'};
  padding: 55px 60px;
`;

const ExchangePromoHead = styled.div`
  margin-bottom: 40px;
  padding-left: 100px;
`;

const GrayText = styled(Text)`
  color: ${props => props.theme.colors.gray.main};
`;

const AdvantageList = styled.div`
  display: flex;
  flex-flow: wrap;
`;

const AdvantageListItemWrap = styled.div`
  margin-bottom: 40px;
  padding-right: 35px;
  padding-left: 100px;
  position: relative;
  flex-basis: 50%;
  flex-grow: 1;
  flex-shrink: 1;

  &:before {
    content: '';
    background-image: url(${props => props.icon});
    background-position: left top;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 35px;
    height: 50px;
    width: 50px;
  }
`;

const AdvantageListItem = ({ title, text, icon}) =>
  <AdvantageListItemWrap icon={icon}>
    <Text use='h3'>
      {title}
    </Text>
    <GrayText use='body'>
      {text}
    </GrayText>
  </AdvantageListItemWrap>

const ExchangePromo = ({ bgColor }) =>
  <ExchangePromoWrap bgColor={bgColor}>
    <ExchangePromoHead>
      <Text use='h1'>
        WunderX exchange
      </Text>
      <br />
      <GrayText use='body1'>
        We’ve combined the best technologies and financial solutions that are used across the top classic and crypto exchanges to create a superior product.
      </GrayText>
    </ExchangePromoHead>
    <AdvantageList>
      {
        exchangePromoData.map(item => <AdvantageListItem key={generateKey(item.title)} {...item}/>)
      }
    </AdvantageList>
  </ExchangePromoWrap>

export default ExchangePromo;