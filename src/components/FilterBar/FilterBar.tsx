import React from 'react'

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

//Styled Component
import { StyledFilterBar } from './StyledFilterBar'

export default function FilterBar() {
    return (
        <StyledFilterBar>
            <section className='search-bar'>
                <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
                <input
                    className='search-input'
                    type='text'
                    placeholder='Search for a country...'
                />
            </section>

            <select
                className='region-select'
                defaultValue={''}
            >
                <option value="" disabled hidden>Filter by Region</option>
                <option value='africa'>Africa</option>
                <option value='america'>America</option>
                <option value='asia'>Asia</option>
                <option value='europe'>Europe</option>
                <option value='oceania'>Oceania</option>
            </select>
        </StyledFilterBar>
    )
}
