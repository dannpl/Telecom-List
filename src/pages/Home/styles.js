import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 0px 25px;
  flex-direction: column;

  .container-mode {
    padding: 0px 10px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .container-pagination {
    padding: 0px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const CardsList = styled.div`
  display: flex;
  width: 100%;
  flex-direction: ${(props) => (props.mode !== 'list' ? 'row' : 'column')};
  flex-wrap: wrap;
  height: calc(100vh - 250px);
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Card = styled.div`
  width: 100%;
  min-width: 200px;
  flex: 1;
  padding: 10px;

  .content {
    background-color: white;
  }
`;
