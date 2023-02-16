import styled from 'styled-components';

export const ContainerSkeleton = styled.li`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(2)};
    width: 100%;
    > div {
        width: 8%;
    }
    > p {
        width: 70%;
    }
`;