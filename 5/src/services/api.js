import axios from 'axios';

import { apiURL } from '../utils';

export function getAllLocations(values) {
  return axios.get(`${apiURL}/location/search/?query=${values}`);
}

export function getWeatherOfLocation(values) {
  return axios.get(`${apiURL}/location/${values}`);
}
