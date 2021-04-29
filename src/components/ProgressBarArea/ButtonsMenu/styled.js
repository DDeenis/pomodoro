import styled from 'styled-components';
import { device } from '../../../media';

export const ButtonsMenuWrapper = styled.div`
    width: 40%;
    height: 50%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-end;

    @media ${device.mobileM} {
        display: none;
    }
`;