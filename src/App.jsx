import React from 'react';
import axios from 'axios';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CountryGrid } from './components/CountryGrid';

export const App = () => {
  const [countries, setCountries] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetch = async () => {
      const response = await axios(`https://restcountries.eu/rest/v2/all`);
      setCountries(response.data);
      setLoading(false);
    };
    fetch();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <CountryGrid loading={loading} countries={countries} />
      </div>
      <Footer />
    </>
  );
};
