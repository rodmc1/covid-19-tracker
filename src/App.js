import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import './App.css';
import { fetchData } from './api';

import coronaImage from './images/covid-img.png';

class App extends React.Component {
  state = {
    data: {},
    country: ''
  };

  onCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  async componentDidMount(country) {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className="container">
        <img className="image" src={coronaImage} alt="Covid-19" />
        <Cards data={data} />
        <CountryPicker onCountryChange={this.onCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
