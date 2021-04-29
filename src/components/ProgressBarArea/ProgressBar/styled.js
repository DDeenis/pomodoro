import styled from 'styled-components';
import { device } from '../../../media';

export const ProgressBarWrapper = styled.div`
    position: relative;
    width: 80vw;
    height: 92px;

    @media ${device.mobileM} {
        width: 95vw;
    }
`;

export const ProgressBarFilled = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => props.progressWidth}%;
    height: 100%;
    background: ${props => props.progressBackground};
    transition: background .3s ease, width .3s ease;
    border-radius: 12px;
    z-index: 1;
`;

export const ProgressBarEmpty = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #E7E6E1;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
    border-radius: 12px;
    z-index: -1;
`;