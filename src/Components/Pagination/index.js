import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container, ButtonPage } from './styles';

export default function Pagination(props) {
  const [totalPages, setTotalPages] = useState(0);

  const init = async () => {
    const { total, limit } = props.pagination;

    setTotalPages(total / limit);
  };

  function getPages() {
    const data = [];

    if (!totalPages) return [];

    for (let i = 1; i <= totalPages; i++) {
      data.push(i);
    }

    return data;
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <Container>
      {getPages().map((page) => (
        <ButtonPage
          onClick={() => {
            props.changePagination({
              page: page,
              limit: props.pagination.limit,
              total: props.pagination.total,
            });
          }}
          active={page === props.pagination.page}
          className="page"
          key={page}
        >
          {page}
        </ButtonPage>
      ))}
    </Container>
  );
}

Pagination.propTypes = {
  pagination: PropTypes.any,
  changePagination: PropTypes.func,
};
