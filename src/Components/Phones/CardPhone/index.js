import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function CardPhone({ value, monthlyPrice, currency, setupPrice }) {
  return (
    <Container>
      <span>●</span>
      <p>Phone: {value}</p>
      <div>
        <div>
          <span>Value per Monthly</span>
          <span>
            {monthlyPrice}
            {currency}
          </span>
        </div>
        <div>
          <span>Setup Price</span>
          <span>
            {setupPrice}
            {currency}
          </span>
        </div>
      </div>
    </Container>
  );
}

CardPhone.propTypes = {
  value: PropTypes.string,
  monthlyPrice: PropTypes.number,
  setupPrice: PropTypes.number,
  currency: PropTypes.string,
};
