import React from 'react';
import { useSelector } from 'react-redux';

import { Image } from 'react-bootstrap';

import { Container, UserInfos } from './styles';

function Profile() {
  const user = useSelector((state) => state.user);

  return (
    <Container>
      <UserInfos>
        <Image className="image" src={user.picture} roundedCircle />
        <p className="name">{user.name}</p>
        <p className="age">{user.age} years</p>

        <div className="others-info">
          <p className="label">
            Email:<span className="value">{user.email}</span>
          </p>
          <p className="label">
            Address:
            <span className="value">{user.address}</span>
          </p>
        </div>
      </UserInfos>
    </Container>
  );
}

export default Profile;
