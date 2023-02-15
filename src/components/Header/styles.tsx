import styled from 'styled-components';

export const ContainerHeader = styled.header`
    div.container {
        padding-top: ${({ theme }) => theme.spacing(6)};
        padding-bottom: ${({ theme }) => theme.spacing(6)};
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing(6)};
        h1 {
            font-size: ${({ theme }) => theme.fonts.sizes[48]};
            font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
            font-weight: bold;
            font-style: normal;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.PRIMARY.MAIN};
            strong {
                font-weight: bold;
                color: ${({ theme }) => theme.colors.TEXT.DARK};
            }
        }
    }
`;

export const ContainerHeaderForm = styled.form`
    width: 100%;
    max-width: 460px;
`;