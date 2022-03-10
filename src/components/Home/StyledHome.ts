import styled from "styled-components";

export const StyledHome = styled.main`
    width: 100vw;
    display: flex;
    flex-direction: column;
    
    .country-section {
        width: 100%;
        display: grid;
        grid-template-columns: repeat( 4, 1fr);
      }
`