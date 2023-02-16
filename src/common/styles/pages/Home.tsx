import styled from 'styled-components';

export const ContainerHome = styled.section`
    width: 100%;
    display: flex;
    gap: ${({ theme }) => theme.spacing(6)};
    margin-top: ${({ theme }) => theme.spacing(3)};
    height: calc(100vh - 241px - ${({ theme }) => theme.spacing(3)});
    min-height: 500px;
    overflow: hidden;
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
        margin-top: ${({ theme }) => theme.spacing(3)};
        position: relative;
    }
    header {
        border-bottom: 2px solid ${({ theme }) => theme.colors.PRIMARY.DARK};
        padding-bottom: ${({ theme }) => theme.spacing(2)};
        h4 {
            font-size: ${({ theme }) => theme.fonts.sizes[20]};
            font-weight: 500;
            font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
            font-style: normal;
            color:${({ theme }) => theme.colors.TEXT.DARK};
            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                font-size: ${({ theme }) => theme.fonts.sizes[16]};
                font-weight: 400;
            }
        }
    }
`;