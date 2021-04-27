import styled from 'styled-components';

export const TaskDescriptionWrapper = styled.div`
    width: 415px;
    height: 78px;
    background: #E7E6E1;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    transition: height .3s ease;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 30%;
    left: 0;
`;

export const TaskDescriptionText = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: #000000;
    width: 90%;
    height: 100%;
    margin: 21px 34px;
`;