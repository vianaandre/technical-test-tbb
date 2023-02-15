import styled from 'styled-components';

export const ContainerCheckbox = styled.div`
    display: flex; 
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1.5)};
    cursor: pointer;
    label {
        font-size: ${({ theme }) => theme.fonts.sizes[18]};
        font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
        font-weight: 400;
        font-style: normal;
        color: ${({ theme }) => theme.colors.TEXT.DARK};
        cursor: pointer;
    }
`;

export const ContainerCheckboxInput = styled.input`
    width: ${({ theme }) => theme.spacing(2.75)};
    height: ${({ theme }) => theme.spacing(2.75)};
    -moz-appearance:none;
    -webkit-appearance:none;
    -o-appearance:none;
    outline: none;
    content: none;
    border: 2px solid ${({ theme }) => theme.colors.PRIMARY.MAIN};
    border-radius: 3px;
    transition: 200ms;
    position: relative;
    &:checked {
        transition: 200ms;
        background-color: ${({ theme }) => theme.colors.PRIMARY.MAIN};
        &:before {
            content: "";
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 3px;
            height: 11px;
            left: 50%;
            top: 3px;
            transform: rotate(45deg);
            background-color: ${({ theme }) => theme.colors.WHITE};
        }
        &:after {
            content: "";
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 3px;
            height: 6px;
            right: 60.5%;
            top: 6px;
            transform: rotate(-45deg);
            background-color: ${({ theme }) => theme.colors.WHITE};
        }
    }
    &:hover {
    }
`;