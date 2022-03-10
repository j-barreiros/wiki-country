import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Components
import TopBar from '../TopBar/TopBar';
import FilterBar from '../FilterBar/FilterBar';
import CountryInfoBox from '../CountryInfoBox/CountryInfoBox';

// Styled Component
import { StyledHome } from './StyledHome';

function Home() {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch(`https://restcountries.com/v2/all`)
            .then((response) => response.json())
            .then((data) => {
                setCountries(data);
            })
    }, [])


    return (
        <StyledHome>
            <TopBar />
            <FilterBar />
            <section className='country-section'>
                {countries.map(country => <CountryInfoBox country={country} countryName={country["name"]} />)}
            </section>
        </StyledHome>
    );
}

export default Home;