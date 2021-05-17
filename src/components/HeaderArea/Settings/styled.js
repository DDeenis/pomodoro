import styled from 'styled-components';

export const StyledSettings = styled.div`
    display: flex;
    flex-flow: column wrap;
`;

export const ChangeTimeWrapper = styled.div`
    width: 50%;
    height: 150px;
    border: 2px solid ${({ theme }) => theme.colors.taskBackground};
    border-radius: 15px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`;

export const ChangeTimeItem = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    margin: 10px;
`;

export const ChangeTimeInput = styled.input`
    border: 2px solid ${({ theme }) => theme.colors.taskBackground};
    border-radius: 10px;
    padding: 3px;
`;

export const ChangeTimeLabel = styled.label`
    margin: 5px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    color: #000;
`;
