import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function CardPhone({
  value,
  monthlyPrice,
  currency,
  setupPrice,
  isActive,
  mode,
  loading,
  openModal,
  id,
}) {
  return (
    <Container
      mode={mode}
      isActive={isActive}
      onClick={() => openModal(value, id, isActive)}
    >
      {loading && (
        <>
          <p className="no-data w-4 fake" />
          <p className="no-data w-8 fake" />
          <p className="no-data w-12 fake" />
        </>
      )}
      {!loading && (
        <>
          <span className="status">●</span>
          <div className="phone-info">
            <p className="label">Phone</p>
            <span className="value">{value}</span>
          </div>

          <div className="prices">
            <p className="label">Prices</p>
            <div className="view-prices">
              <p className="value">
                {monthlyPrice}
                {currency}
                <small>/ MONTHLY</small>
              </p>
              <p className="value">
                {setupPrice}
                {currency}
                <small>/ SETUP</small>
              </p>
            </div>
          </div>
        </>
      )}
    </Container>
  );
}

CardPhone.propTypes = {
  id: PropTypes.any,
  value: PropTypes.string,
  monthlyPrice: PropTypes.number,
  setupPrice: PropTypes.number,
  currency: PropTypes.string,
  isActive: PropTypes.any,
  loading: PropTypes.bool,
  mode: PropTypes.string,
  openModal: PropTypes.func,
};
