import React from 'react'

// Styled Component
import { StyledTopBar } from './StyledTopBar';

export default function TopBar() {

    let isInDarkMode = true;

    return (
        <StyledTopBar>
            <h1>Where in the world?</h1>
            <button>{ isInDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
        </StyledTopBar>
    )
}
