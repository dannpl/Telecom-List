import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: fixed;
  right: 0px;
  top: 0;
  width: calc(100% - (${(props) => (props.expanded ? '251px' : '70px')}));
  align-items: center;
  justify-content: flex-end;
  padding: 0px 20px;
  height: 70px;
  background-color: #092f57;
  transition: all 0.3s;

  @media (max-width: 768px) {
    width: calc(100% - (${(props) => (props.expanded ? '35%' : '0px')}));
  }

  .menu {
    position: absolute;
    left: 20px;
    cursor: pointer;
    z-index: 1;
    margin-top: 4px;
    width: 24px;
  }

  .user-menu {
    display: flex;
    align-items: center;

    .no-data {
      &.img {
        height: 45px;
        margin: auto;
        border-radius: 100%;
        width: 45px;
      }
    }

    .name {
      color: white;
      font-size: 15px;
      margin-left: 10px;
      text-decoration: none;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        color: #61dafb;
      }

      .no-data {
        height: 1rem;
        margin: auto;
        border-radius: 2px;
        width: 120px;
      }
    }
  }
`;

export const SideBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => (props.expanded ? '251px' : '70px')};
  height: 100%;
  background-color: #092f57;
  transition: all 0.3s;

  @media (max-width: 768px) {
    width: calc(100% - (${(props) => (props.expanded ? '65%' : '100%')}));
  }

  .logo-name {
    font-size: 18px;
    color: white;
    font-weight: bold;
    text-transform: capitalize;
    text-decoration: none;
    position: absolute;
    right: 0;
    left: 0;
    margin: 24px auto;
    text-align: center;

    &:hover {
      color: #61dafb;
    }
  }
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;

  .item {
    display: flex;
    margin-bottom: 15px;
    align-items: center;
    color: white;
    font-weight: bold;
    font-size: ${(props) => (props.expanded ? '15px' : '25px')};
    padding-left: ${(props) => (props.expanded ? '10px' : '18px')};
    width: 100%;
    border-left: 8px solid transparent;
    height: 46px;
    text-decoration: none;

    &:hover {
      background-color: #64acfb;
      border-color: #4e95e3;
    }
  }

  .active {
    background-color: #64acfb;
    border-color: #4e95e3;
  }
`;
