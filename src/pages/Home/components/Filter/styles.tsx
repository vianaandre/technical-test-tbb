import styled from 'styled-components';

export const ContainerFilter = styled.div`
    width: 30%;
    h4.mobile {
        display: none;
    }
    div.icon_filter {
        display: none;
    }
    button.mobile {
        display: none;
    }
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 100%;
        position: absolute;
        top: -4px;
        h4.normal {
            display: none;
        }
        h4.mobile {
            display: block;
        }
        div.icon_filter {
            display: flex;
        }
        header {
            border-bottom: none !important;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: ${({ theme }) => theme.spacing(1)};
        }
        button.mobile {
            display: flex;
            align-items: center;
            gap: ${({ theme }) => theme.spacing(1)};
            transition: 400ms;
            &:hover {
                transition: 400ms;
                filter: brightness(1.7)
            }
        }
    }
    div.categories {
        footer {
            display: none;
        }
        ul {
            margin-top: ${({ theme }) => theme.spacing(3)};
            display: flex;
            flex-direction: column;
            gap: ${({ theme }) => theme.spacing(3)};
            &.loading {
                gap: ${({ theme }) => theme.spacing(2)};
            }
        }
        header {
            display: none;
        };
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            position: fixed;
            height: 100vh;
            width: 100vw;
            top: 0px;
            right: 0px;
            background-color: ${({ theme }) => theme.colors.GREY[200]};
            display: flex;
            justify-content: flex-end;
            opacity: 0;
            z-index: -1;
            transition: 400ms;
            div.content {
                background-color: ${({ theme }) => theme.colors.WHITE};
                width: 100%;
                min-width: 300px;
                max-width: 350px;
                display: flex;
                flex-direction: column;
                transform: translate(100vw, 0px);
                transition: 400ms;
            }
            &.active {
                z-index: ${({ theme }) => theme.zIndex.MENU};
                transition: 400ms;
                opacity: 1;
                div.content {
                    transition: 400ms;
                    transform: translate(0px, 0px);
                }
            }
            header {
                display: flex !important;
                width: 100%;
                display: none;
                position: relative;
                align-items: center;
                justify-content: center;
                padding: ${({ theme }) => theme.spacing(2)} 0px;
                border-bottom: 1px solid ${({ theme }) => theme.colors.GREY[500]} !important;
                div.btn_close {
                    position: absolute;
                    left: ${({ theme }) => theme.spacing(1)};
                }
            }
            ul {
                margin-top: ${({ theme }) => theme.spacing(4)};
                gap: ${({ theme }) => theme.spacing(4)};
                align-items: center;
                li {
                    width: 220px;
                }
            }
            footer {
                display: flex;
                justify-content: flex-end;
                margin-top: auto;
                padding: ${({ theme }) => theme.spacing(2)};
                border-top: 1px solid ${({ theme }) => theme.colors.GREY[500]};
                button {
                    width: 100%;
                    padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(5)};
                    font-size: ${({ theme }) => theme.fonts.sizes[16]};
                    font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
                    font-weight: 500;
                    background-color: ${({ theme }) => theme.colors.PRIMARY.DARK};
                    color: ${({ theme }) => theme.colors.WHITE};
                    border-radius: 4px;
                    transition: 400ms;
                    &:hover {
                        transition: 400ms;
                        filter: brightness(1.3)
                    }
                    &:active {
                        transition: 400ms;
                        filter: brightness(1.7)
                    }
                }
            }
        }
    }
`;