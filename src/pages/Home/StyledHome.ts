import styled from "styled-components";

export const StyledHome = styled.main`
    display: flex;
    flex-direction: column;
    background: hsl(207, 26%, 17%);
    
    .country-section {
        width: 100%;
        display: grid;
        grid-template-columns: repeat( 4, 1fr);
        gap: 10px 15px;
    }
`