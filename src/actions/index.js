const API_KEY = '0d3b02bc028a824ab4c62a852b775dbc';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
	return {
		type: FETCH_WEATHER
	};

}