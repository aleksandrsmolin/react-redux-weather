import axios from 'axios';

const API_KEY = '93a4c24dbf6ceef7df22bd6c403ca52b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FEATCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},ua`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}