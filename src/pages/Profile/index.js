import React from 'react';

import { Image } from 'react-bootstrap';

import { Container, UserInfos } from './styles';

function Profile() {
  return (
    <Container>
      <UserInfos>
        <Image className="image" src="http://placehold.it/151x151" roundedCircle />
        <p className="name">Daniel Cardoso</p>
        <p className="age">22 years</p>

        <div className="others-info">
          <p className="label">
            Email: <span className="value">d@teste.com</span>
          </p>
          <p className="label">
            Address:
            <span className="value">
              802 Rock Street, Urbana, Minnesota, 7391
            </span>
          </p>
        </div>
      </UserInfos>
    </Container>
  );
}

export default Profile;
