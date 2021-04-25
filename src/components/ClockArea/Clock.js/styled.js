import styled from 'styled-components';
import { clockStates } from '../../../redux/actionCreators';

export const ClockWrapper = styled.div`
    width: 40vw;
    height: 235px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    transition: background .3s ease;
    z-index: 1000;
    background: ${props => {
        switch (props.clockState) {
            case clockStates.STOP:
                return '#314E52';
            case clockStates.PAUSE:
                return '#F7F6E7';
            case clockStates.REST:
                return '#536162';
            default:
                return '#ABDF81';
        }
    }};
`;

// nothing here
export const ClockTimeWrapper = styled.div`
  
`;

export const ClockTime = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    // font-size: 144px;
    font-size: 9rem;
    color: #F7F6E7;
    transition: color .3s ease;
    color: ${props => props.clockState === clockStates.PAUSE ? '#314E52' : '#F7F6E7'};
`;
