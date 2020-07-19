import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: calc(100vh - 70px);
`;

export const UserInfos = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  height: auto;
  margin-top: 80px;
  padding: 0px 15px;

  .image {
    max-width: 151px;
    margin: 0px auto;
    max-height: 151px;
    min-height: 151px;
  }

  .name,
  .age {
    color: #4f4f4f;
    font-weight: 600;
    margin: 0px;
  }

  .name {
    margin-top: 20px;
    font-size: 40px;
  }

  .age {
    font-size: 25px;
  }

  .others-info {
    margin-top: 50px;

    .label {
      font-size: 20px;
      font-weight: 600;
      margin-top: 5px;
      margin-bottom: 0px;
      color: rgba(82, 72, 72, 0.75);
    }

    .value {
      font-size: 20px;
      margin-left: 5px;
      font-weight: 600;
      color: #4f4f4f;
    }
  }
`;
