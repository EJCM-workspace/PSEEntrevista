import styled from 'styled-components';
import backgroundImage from '../../assets/BG.svg';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;



export const Topbar = styled.image`
position: absolute;
  background-color: #22A2F2;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  top: 0;

  @media (max-width: 968px) {
    height: auto;
  }
`;

export const ModalContainer = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 500px;
    width: 90%;
    position: relative;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
`;
