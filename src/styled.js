import styled from 'styled-components';
import { device } from './media';

export const StyledApp = styled.div`
    margin: 0;
    height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.bodyBackground};

    @media ${device.mobileM} {
        height: 110vh;
    }
`;