import React, { useState, useEffect } from 'react'

import { useParams, useNavigate } from 'react-router-dom'
import { ObjectType } from 'typescript';

// Components
import TopBar from '../../components/TopBar/TopBar'

interface CountryData {
  flags: { svg: string, png: string };
  name: string;
  nativeName: string;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string;
  currencies: [];
  languages: [];
  borders: []
}

const initialData: CountryData = {
  flags: { svg: '', png: '' },
  name: '',
  nativeName: '',
  region: '',
  subregion: '',
  capital: '',
  topLevelDomain: '',
  currencies: [],
  languages: [],
  borders: [],
}

export default function CountryPage() {

  const [selectedCountry, setSelectedCountry] = useState<CountryData>(initialData);

  const { countryName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (countryName === undefined) return;
    fetch(`https://restcountries.com/v2/name/${countryName}?fields=flags,name,nativeName,region,subregion,capital,topLeveDomain,currencies,languages,borders`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedCountry(data[0])
      })
      .catch(err => {
        console.log(err);
        navigate('/')
      })
  }, [countryName])

  return (
    <>
      {console.log(selectedCountry)}
      <TopBar></TopBar>
      <section>
        <button
          className='backButton'
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </section>

      <section className='flagSection'>
        <img src={selectedCountry.flags.png}></img>
      </section>

      <section className='info-section'>
        <article className='info-header'>
          <h1>{selectedCountry.name}</h1>
        </article>

        <article className='info-column-a'>
          <p>{`Native Name: ${selectedCountry.nativeName}`}</p>
          <p>{`Region: ${selectedCountry.region}`}</p>
          <p>{`Sub Region: ${selectedCountry.subregion}`}</p>
          <p>{`Capital: ${selectedCountry.capital}`}</p>
        </article>

        <article className='info-column-b'>
          {selectedCountry.topLevelDomain && <p>{`Top Level Domain: ${selectedCountry.topLevelDomain}`}</p>}
          {selectedCountry.currencies && <p>{`Currencies: ${selectedCountry.currencies.map((currency: any) => currency.name).join(', ')}`}</p>}
          {selectedCountry.languages && <p>{`Languages: ${selectedCountry.languages.map((language: any) => language.name).join(', ')}`}</p>}
          {selectedCountry.borders && <p>{`Borders: ${selectedCountry.borders.map((border: string) => border).join(', ')}`}</p>}
        </article>
        
      </section>
    </>
  )
}
