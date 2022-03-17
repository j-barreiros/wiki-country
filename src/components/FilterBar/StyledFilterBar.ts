import styled from "styled-components";

export const StyledFilterBar = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 60px;

    .search-bar {
        width: 350px;
        padding: 5px 0px;
        display: flex;
        border-radius: 4px;
        overflow: hidden;
        justify-content: center;
        align-items: center;
        background: hsl(209, 23%, 22%);

        .search-icon {
            color: hsl(0, 0%, 100%);
            margin: 0px  10px 0px 20px;
        }

        .search-input {
            width: 100%;
            padding: 10px 10px;
            border: none;
            background: none;
            color: hsl(0, 0%, 100%);
            font-size: 14px;
            font-weight: 600;
            
            &::placeholder {
                font-size: 14px;
                color: hsl(0, 0%, 100%);
                font-weight: 600;
            }
    
            &:focus {
                outline: none;
            }
        }
    }

    .region-select {
        background: hsl(209, 23%, 22%);
        padding: 10px 15px;
        border-radius: 4px;
        color: hsl(0, 0%, 100%);
        font-weight: 600;

        &:focus {
            outline: none;
        }
    }
`