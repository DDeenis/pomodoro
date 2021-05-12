import styled from 'styled-components';

export const ModalDarkBackground = styled.div`
    display: ${({ isVisible }) => isVisible ? 'inherit' : 'none'};
    position: absolute;
    left: 0;
    top: 0;
    background-color: #000;
    opacity: 0.5;
    width: 100vw;
    height: 100vh;
    z-index: 100;
`;

export const ModalWrapper = styled.div`
    display: ${({ isVisible }) => isVisible ? 'inherit' : 'none'};
    position: absolute;
    width: 50vw;
    height: 60vh;
    left: 25%;
    top: 20%;
    background-color: #fff;
    border-radius: 15px;
    z-index: 100;
`;
