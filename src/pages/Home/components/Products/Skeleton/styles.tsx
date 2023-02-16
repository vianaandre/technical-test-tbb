import styled from 'styled-components';

export const ContainerSkeleton = styled.li`
    margin-top: ${({ theme }) => theme.spacing(2)};

    > div {
        margin-bottom: ${({ theme }) => theme.spacing(1.5)};
    }

    div.normal {
        display: block;
    }
    div.desktop, div.tablet, div.mobile {
        display: none;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.desktop}) {
        div.normal {
            display: none;
        }
        div.desktop {
            display: block;
        }
    }
    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        div.normal {
            display: none;
        }
        div.desktop {
            display: none;
        }
        div.tablet {
            display: block;
        }
    }
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        div.tablet {
            display: none;
        }
        div.mobile {
            display: block;
        }
    }
`;