import styled from 'styled-components';
import { device } from '../../../media';

export const StyledSettingsButton = styled.div`
    background-color: ${({ theme }) => theme.colors.taskBackground};
    width: 15%;
    height: 76px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
    align-self: center;
    cursor: pointer;

    @media ${device.mobileM} {
        order: -1;
        width: 90vw;
    }
`;

export const SettingsButtonText = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.taskText};
    user-select: none;
`;