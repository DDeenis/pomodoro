/* eslint-disable no-useless-escape */
import styled from 'styled-components';
import Play from '../../images/play-button.svg';
import Stop from '../../images/stop.svg';
import Pause from '../../images/pause.svg';

export const ClockAreaWrapper = styled.section`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
`;

export const ClockControlsWrapper = styled.div`
    width: 38px;
    height: 50%;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
`;

export const ClockControl = styled.div`
    width: 38px;
    height: 39px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
    border-radius: 0px 6px 6px 0px;
    cursor: pointer;
    background-color: ${props => {
        switch (props.controlState) {
            case 'start':
                return '#F2A154';
            case 'stop':
                return '#314E52';
            case 'pause':
                return '#F7F6E7';
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
`;
