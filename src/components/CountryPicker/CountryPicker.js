import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';
import './CountryPicker.css';

const CountryPicker = ({ onCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchCountriesAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchCountriesAPI();
  }, [setFetchedCountries]);

  const rederedCountries = () => {
    return fetchedCountries.map((country, i) => (
      <option key={i} value={country}>
        {country}
      </option>
    ));
  };

  return (
    <FormControl className="formControl">
      <NativeSelect
        defaultValue=""
        onChange={(e) => onCountryChange(e.target.value)}>
        <option value="">Global</option>
        {rederedCountries()}
      </NativeSelect>
    </FormControl>
  );
};
export default CountryPicker;
