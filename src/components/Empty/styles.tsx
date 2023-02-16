import styled from 'styled-components';

export const ContainerEmpty = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h6 {
        font-size: ${({ theme }) => theme.fonts.sizes[24]};
        font-weight: bold;
        font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
        font-style: normal;
        color: ${({ theme }) => theme.colors.GREY[200]};
        text-transform: uppercase;
    }
`;