import styled from 'styled-components';

export const MenuButtonWrapper = styled.div`
    width: 30%;
    height: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
    border-radius: 12px 12px 0px 0px;
    cursor: pointer;
    background-color: ${props => props.backgroundColor};
    transition: .1s ease;

    &:active {
        transform: scale(0.95);
    }
`;

export const MenuButtonText = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    transition: color .3s ease;
    color: ${props => props.textColor};
`;