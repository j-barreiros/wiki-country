import styled from "styled-components";

export const StyledTopBar = styled.section`
    width: 100%;
    padding: 14px 60px 17px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: hsl(209, 23%, 22%);

    h1, .theme-button {
        color: hsl(0, 0%, 100%);
    }

    .theme-button {
        background: none;
        border:none;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.5s;

        &:hover {
        }
    }
`