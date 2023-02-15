import styled from 'styled-components';

export const ContainerProduct = styled.li`
    width: calc(100% / 3 - ${({ theme }) => theme.spacing(1.40)});
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(2)};
    margin-top: ${({ theme }) => theme.spacing(3)};
    cursor: pointer;

    img {
        max-width: 100%;
    }

    h6 {
        font-size: ${({ theme }) => theme.fonts.sizes[16]};
        font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
        font-weight: 500;
        font-style: normal;
        color: ${({ theme }) => theme.colors.TEXT.DARK};
        text-align: center;
    }
`;