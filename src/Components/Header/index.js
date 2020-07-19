import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Image } from 'react-bootstrap';

import MenuIcon from './../../assets/imgs/menu.png';
import { Container, SideBar, MenuList } from './styles';

import Repository from './../../services/repository';

import * as UserActions from './../../store/modules/user/actions';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector((state) => state.user);
  const [menuList] = useState([{ name: 'Phones', router: '/phones' }]);

  const api = new Repository();
  const dispatch = useDispatch();

  const getUser = async () => {
    const userStorage = sessionStorage.getItem('user');
    if (userStorage) {
      return dispatch(UserActions.setUser(JSON.parse(userStorage)));
    }

    const response = await api.getUserById(1);

    if (!response.data) return null;

    dispatch(UserActions.setUser(response.data));
  };

  useEffect(() => {
    getUser();
  }, []);

  const expandedMenu = () => {
    const containerMain = document.getElementById('main-layout');
    let valueOpen = '251px';
    let valueClose = '70px';

    if (window.innerWidth <= 768) {
      valueOpen = '35%';
      valueClose = '0px';
    }

    containerMain.style.marginLeft = `${!showMenu ? valueOpen : valueClose}`;

    setShowMenu(!showMenu);
  };

  function sideBar() {
    return (
      <SideBar expanded={showMenu}>
        <NavLink className="logo-name" to="/">
          {showMenu ? 'Telecom Carrier' : 'TC'}
        </NavLink>

        {window.innerWidth > 768 || showMenu ? (
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
        ) : (
          ''
        )}
      </SideBar>
    );
  }

  return (
    <>
      {sideBar()}
      <Container expanded={showMenu}>
        <img
          onClick={expandedMenu}
          className="menu"
          src={MenuIcon}
          alt="menu"
        />
        <div className="user-menu">
          {user.picture ? (
            <Image src={user.picture} roundedCircle />
          ) : (
            <p className="no-data img" />
          )}
          <NavLink variant="success" className="name" to="/profile">
            {user.name ? user.name : <p className="no-data" />}
          </NavLink>
        </div>
      </Container>
    </>
  );
}
