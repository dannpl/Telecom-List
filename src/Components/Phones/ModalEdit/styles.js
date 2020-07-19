import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  top: 0;
  left: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: 5;
  background-color: #0000004a;
  visibility: ${(props) => (props.show ? 'unset' : 'hidden')};
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  background-color: white;
  z-index: 6;
  width: 30%;
  height: 200px;
  position: relative;
  border-radius: 6px;

  @media (max-width: 768px) {
    width: 80%;
  }

  .close-icon {
    position: absolute;
    right: 8px;
    top: 8px;
    cursor: pointer;
  }

  .phone {
    font-size: 22px;
    font-weight: bold;
  }

  .form-group {
    margin-top: 30px;
    margin-bottom: 20px;
    .label {
      font-size: 15px;
      font-weight: bold;
    }
  }
`;
