/* eslint-disable no-useless-escape */
import styled from 'styled-components';
import Play from '../../images/play-button.svg';
import Stop from '../../images/stop.svg';
import Pause from '../../images/pause.svg';
import { device } from '../../media';

export const ClockAreaWrapper = styled.section`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;

    @media ${device.mobileM} {
        display: unset;
        flex-direction: row;
    }
`;

export const ClockControlsWrapper = styled.div`
    width: 38px;
    height: 50%;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;

    @media ${device.mobileM} {
        padding: 5px;
        flex-flow: row nowrap;
        width: 95vw;
        margin: 10px 0;
    }
`;

export const ClockControl = styled.div`
    width: 38px;
    height: 39px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
    border-radius: 0px 6px 6px 0px;
    cursor: pointer;
    background-color: ${({ theme, controlState }) => {
        switch (controlState) {
            case 'start':
                return theme.colors.clockStart;
            case 'stop':
                return theme.colors.clockStop;
            case 'pause':
                return theme.colors.clockPause;
        }
    }};
    background-image: ${props => {
        switch (props.controlState) {
            case 'start':
                return `url(${Play})`;
            case 'stop':
                return `url(${Stop})`;
            case 'pause':
                return `url(${Pause})`;
        }
    }};
    background-position: center;
    background-repeat: no-repeat;
    background-size: 60%;
    transition: .1s ease;

    &:active {
        transform: scale(0.95);
    }

    @media ${device.mobileM} {
        width: 27vw;
        height: 12vh;
        border-radius: 10px;
        background-size: 30%;
    }
`;
