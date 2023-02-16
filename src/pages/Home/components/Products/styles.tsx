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
        li {
            width: calc(100% / 3 - ${({ theme }) => theme.spacing(1.34)});
            @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                width: calc(100% / 2 - ${({ theme }) => theme.spacing(1)});
            }
            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                width: calc(100% / 2 - ${({ theme }) => theme.spacing(1)});
            } 
        }
    }
`;