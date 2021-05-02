import styled from 'styled-components';

export const StyledApp = styled.div`
    margin: 0;
    height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.bodyBackground};
`;