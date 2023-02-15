import styled from 'styled-components';

export const ContainerFilter = styled.div`
    width: 30%;
    ul {
        margin-top: ${({ theme }) => theme.spacing(3)};
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing(3)};
    }
`;