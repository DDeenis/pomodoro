import styled from 'styled-components';

export const ModalDarkBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100vw;
    height: 100vh;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${({ active }) => active ? 1 : 0};
    pointer-events: ${({ active }) => active ? 'all' : 'none'};
    transition: 0.5s;
`;

export const ModalWrapper = styled.div`
    width: 50vw;
    height: 60vh;
    background-color: #fff;
    border-radius: 15px;
    padding: 10px;
    z-index: 100;
    transform: ${({ active }) => active ? 'scale(1)' : 'scale(0.5)'};
    transition: 0.4s;
`;
