import React from 'react'

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMoon as faMoomSolid } from "@fortawesome/free-solid-svg-icons";
import { faMoon as faMoonRegular } from "@fortawesome/free-regular-svg-icons";

// Styled Component
import { StyledTopBar } from './StyledTopBar';

export default function TopBar() {

    let isInDarkMode = true;

    return (
        <StyledTopBar>
            <h1>Where in the world?</h1>
            <button
                className='theme-button'
                // Put change theme function here
                onClick={() => {}}
            >
                <FontAwesomeIcon icon={isInDarkMode ? faMoomSolid : faMoonRegular} />
                Dark Mode
            </button>
        </StyledTopBar>
    )
}
