import styled from 'styled-components';
import { device } from '../../media';

export const HeaderBlock = styled.div`
    width: 80vw;
    height: 20vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    position: relative;

    @media ${device.mobileM} {
        width: 100vw;
        height: 35vh;
        flex-direction: column;
    }
`;