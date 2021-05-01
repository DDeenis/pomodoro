import styled from 'styled-components';
import { device } from '../../../media';

export const TaskDescriptionWrapper = styled.div`
    width: 415px;
    height: ${props => props.height + 'px'};
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

    @media ${device.mobileM} {
        position: unset;
        width: 90vw;
        margin: 10px;
    }
`;

export const TaskDescriptionText = styled.textarea.attrs(() => ({
    placeholder: 'Write your notes here.'
}))`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: #000000;
    background: #E7E6E1;
    resize: none;
    border: 0;
    width: 90%;
    height: 100%;
    margin: 21px 34px;
`;