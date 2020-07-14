import React from 'react';

export const CountryItem = (props) => {
  const {
    data: { flag, name, capital, region, population },
  } = props;

  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={flag} alt="card-img" />
        </div>
        <div className="card-back">
          <h1>{name}</h1>
          <ul>
            <li>
              <strong>Region:</strong> {region}
            </li>
            <li>
              <strong>Capital:</strong> {capital}
            </li>
            <li>
              <strong>Population:</strong> {population}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
