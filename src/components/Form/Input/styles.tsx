import styled from 'styled-components';

export const ContainerInput = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 2px solid ${({ theme }) => theme.colors.PRIMARY.DARK};
    padding: 2px 2px;
    input {
        width: 100%;
        border: none;
        font-size: ${({ theme }) => theme.fonts.sizes[18]};
        font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
        font-weight: 500;
        font-style: normal;
        color: ${({ theme }) => theme.colors.PRIMARY.DARK};
        &:focus {
            outline: none;
            box-shadow: none;
        }
    }

    svg {
        path {
            fill: ${({ theme }) => theme.colors.PRIMARY.DARK}
        }
    }
    transition: 400ms;
    position: relative;
    &:after {
        content: "";
        display: block;
        width: 0%;
        height: 2px;
        position: absolute;
        bottom: -2px;
        left: 0px;
        background-color: ${({ theme }) => theme.colors.PRIMARY.MAIN};
    }
    &.focus {
        transition: 400ms;
        svg {
            path {
                fill: ${({ theme }) => theme.colors.PRIMARY.MAIN}
            }
        }
        &:after {
            transition: 400ms;
            width: 100%;
        }
    }
`;