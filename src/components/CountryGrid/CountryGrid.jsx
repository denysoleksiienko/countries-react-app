import React from 'react';

import { CountryItem } from '../CountryItem';
import { Spinner } from '../Spinner';

export const CountryGrid = ({ countries, loading }) => {
	return loading ? (
		<Spinner />
	) : (
		<section className="cards">
			{countries.map((country) => (
				<CountryItem key={country.numericCode} data={country} />
			))}
		</section>
	);
};
