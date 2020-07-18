import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Image } from 'react-bootstrap';

import MenuIcon from './../../assets/imgs/menu.png';
import { Container, SideBar, MenuList } from './styles';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [menuList] = useState([{ name: 'Phones', router: '/phones' }]);

  const expandedMenu = () => {
    const containerMain = document.getElementById('main-layout');

    containerMain.style.marginLeft = `${!showMenu ? '251px' : '70px'}`;

    setShowMenu(!showMenu);
  };

  function sideBar() {
    return (
      <SideBar expanded={showMenu}>
        <img
          onClick={expandedMenu}
          className="menu"
          src={MenuIcon}
          alt="menu"
        />

        {showMenu && (
          <NavLink className="logo-name" to="/">
            Telecom Carrier
          </NavLink>
        )}

        <MenuList expanded={showMenu}>
          {menuList.map((item) => (
            <NavLink
              key={item.name}
              className="item"
              activeClassName="active"
              to={item.router}
            >
              {showMenu ? item.name : item.name[0]}
            </NavLink>
          ))}
        </MenuList>
      </SideBar>
    );
  }

  return (
    <>
      {sideBar()}
      <Container expanded={showMenu}>
        <div className="user-menu">
          <Image src="http://placehold.it/45x45" roundedCircle />

          <NavLink variant="success" className="name" to="/profile">
            Daniel Cardoso
          </NavLink>
        </div>
      </Container>
    </>
  );
}
