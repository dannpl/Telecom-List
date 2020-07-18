import React from 'react';
import { NavLink } from 'react-router-dom';

import { Image } from 'react-bootstrap';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <NavLink className="logo-name" to="/">
        Telecom Carrier
      </NavLink>

      <div className="user-menu">
        <Image src="http://placehold.it/50x50" roundedCircle />

        <span variant="success" className="name">
          Daniel Cardoso
        </span>
      </div>
    </Container>
  );
}
