import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0px 35px;
  height: 100px;

  .logo-name {
    font-size: 20px;
    color: white;
    text-transform: uppercase;
    text-decoration: none;

    &:hover {
      color: #61dafb;
    }
  }

  .user-menu {
    display: flex;
    align-items: center;

    .name {
      color: white;
      font-size: 15px;
      margin-left: 10px;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        color: #61dafb;
      }
    }
  }
`;
