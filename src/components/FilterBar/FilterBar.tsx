import React from 'react'

//Styled Component
import { StyledFilterBar } from './StyledFilterBar'

export default function FilterBar() {
    return (
        <StyledFilterBar>
            <input type='text'/>

            <select>
                <option value="" disabled selected hidden>Filter by Region</option>
                <option value='africa'>Africa</option>
                <option value='america'>America</option>
                <option value='asia'>Asia</option>
                <option value='europe'>Europe</option>
                <option value='oceania'>Oceania</option>
            </select>
        </StyledFilterBar>
    )
}
