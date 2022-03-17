import React, { useState, useEffect } from 'react';

// Components
import TopBar from '../../components/TopBar/TopBar';
import FilterBar from '../../components/FilterBar/FilterBar';
import CountryInfoBox from '../../components/CountryInfoBox/CountryInfoBox';

// Styled Componentx
import { StyledHome } from './StyledHome';

function Home() {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch(`https://restcountries.com/v2/all`)
            .then((response) => response.json())
            .then((data) => {
                setCountries(data);
                console.log(data)
            })
    }, [])


    return (
        <StyledHome>
            <TopBar />
            <FilterBar />
            <section className='country-section'>
                {countries.map((country, index) => <CountryInfoBox key={index} country={country} />)}
            </section>
        </StyledHome>
    );
}

export default Home;