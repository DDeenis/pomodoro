import styled from 'styled-components';
import { device } from '../../../media';
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
    z-index: 10;
    background: ${({ theme, clockState }) => {
        switch (clockState) {
            case clockStates.STOP:
                return theme.colors.clockStop;
            case clockStates.PAUSE:
                return theme.colors.clockPause;
            case clockStates.REST:
                return theme.colors.clockRest;
            default:
                return theme.colors.clockWork;
        }
    }};

    @media ${device.mobileM} {
        width: 95vw;
        margin: 5px;
    }
`;

// nothing here
export const ClockTimeWrapper = styled.div`
  
`;

export const ClockTime = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 9rem;
    transition: color .3s ease;
    color: ${({ theme, clockState }) => clockState === clockStates.PAUSE ? theme.colors.clockStop : theme.colors.clockPause};

    @media ${device.mobileM} {
        font-size: 7rem;
    }
`;
