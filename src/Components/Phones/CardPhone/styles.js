import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: ${(props) => (props.mode === 'list' ? '60px' : '100%')};
  flex-direction: ${(props) => (props.mode === 'list' ? 'row' : 'column')};
  padding: 0px 10px 10px 10px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  background-color: white;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
  padding-top: ${(props) => (props.mode === 'list' ? '10px' : '22px')};
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
  }

  .status {
    font-size: 30px;
    position: absolute;
    right: 8px;
    top: 0px;
    color: ${(props) => (props.isActive ? '#70FF00' : '#FF0000')};
  }

  .label {
    color: rgba(82, 72, 72, 0.31);
    font-weight: 600;
    font-size: 13px;
    margin: 0px;
    margin-bottom: 5px;
  }

  .value {
    color: #000000;
    font-weight: 600;
    font-size: 14px;

    small {
      font-size: 60%;
      font-weight: bold;
    }
  }

  .phone-info {
    flex: 1;
  }

  .prices {
    margin-top: ${(props) => (props.mode === 'list' ? '0px' : '30px')};
    flex: 1;
    display: flex;
    flex-direction: column;

    .view-prices {
      display: flex;
      width: 100%;
      justify-content: space-between;

      .value {
        &:last-child {
          padding-left: 10px;
        }
        flex: 1;
      }
    }
  }

  .fake {
    border-radius: 5px;
    height: 1.8rem;

    &.w-4 {
      width: 40%;
    }

    &.w-8 {
      width: 80%;
    }

    &.w-12 {
      width: 100%;
    }
  }
`;
