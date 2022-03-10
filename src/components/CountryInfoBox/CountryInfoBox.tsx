import React from 'react'

// Styled Component
import { StyledCountryIngoBox } from './StyledCountryInfoBox';

function CountryInfoBox(props:any) {
    const {flag ,name, population, region, capital} = props.country;
    return (
      <StyledCountryIngoBox>
          <img
            src={flag}
            alt={`Flag from ${name}`}
          ></img>
          <h3>{name}</h3>
          <p>Population: {population}</p>
          <p>Region: {region}</p>
          <p>Capital: {capital}</p>
      </StyledCountryIngoBox>
  )
}

export default CountryInfoBox;
