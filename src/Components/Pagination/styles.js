import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ButtonPage = styled.button`
  min-width: 30px;
  min-height: 30px;
  background-color: ${(props) => (props.active ? 'red' : '')};
`;
