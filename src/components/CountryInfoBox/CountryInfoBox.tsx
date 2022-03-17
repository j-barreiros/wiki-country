import React from 'react'

// React Router
import  {useNavigate} from 'react-router-dom';

// Styled Component
import { StyledCountryIngoBox } from './StyledCountryInfoBox';

function CountryInfoBox(props:any) {
    const {flag ,name, population, region, capital} = props.country;

    const navigate = useNavigate();

    return (
      <StyledCountryIngoBox onClick={() => navigate(`${name}`)}>
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
