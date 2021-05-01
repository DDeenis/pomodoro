import styled from 'styled-components';
import { device } from '../../../media';

export const TaskProgressBlock = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
`;

export const TaskProgressWrapper = styled.div`
    width: 231px;
    height: ${props => props.height + 'px'};
    background: #E7E6E1;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    position: absolute;
    top: 30%;
    right: 0;
    transition: height .3s ease;

    & > * {
        margin: 3px 15px;
    }

    @media ${device.mobileM} {
        position: unset;
        width: 90vw;
        margin: 10px;
    }
`;

export const TaskProgressText = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: #000;
`;
