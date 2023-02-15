import styled from 'styled-components';

export const ContainerProducts = styled.div`
    flex: 1;
    height: 100%;
    margin-bottom: ${({ theme }) => theme.spacing(4)};
    ul {
        display: flex;
        flex-wrap: wrap;
        gap: ${({ theme }) => theme.spacing(2)};
        height: calc(100% - ${({ theme }) => theme.spacing(6)});
        overflow: auto;
        padding-bottom: ${({ theme }) => theme.spacing(6)};
    }
`;