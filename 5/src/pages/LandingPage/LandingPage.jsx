import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  InputAdornment,
  IconButton,
  InputLabel,
  FormControl,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import moment from 'moment';
import SearchIcon from '@mui/icons-material/Search';

import { useStyles } from './styles';
import * as ApiServices from '../../services/api';

const LandingPage = ({ className, firebase, ...rest }) => {
  const classes = useStyles();
  const today = moment().format('YYYY-MM-DD');
  const [state, setState] = useState({
    searchValue: '',
  });
  const [locationList, setLocationList] = useState([]);
  const [todayWeather, setTodayWeather] = useState(null);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  }

  const handleSearch = () => {
    if (state.searchValue !== '') {
      ApiServices.getAllLocations(state.searchValue).then((res) => {
        if (res.status === 200) {
          setLocationList(res.data);
        }
      }).catch((err) => {
        setLocationList([]);
      })
    }
  }

  const handleChooseLocation = (item) => {
    setState({
      ...state,
      searchValue: item.title,
    });

    ApiServices.getWeatherOfLocation(item.woeid).then((res) => {
      if (res.status === 200) {
        res.data.consolidated_weather.forEach((item) => {
          if (item.applicable_date === today) {
            setTodayWeather(item);
          }
        })
      }
    }).catch((err) => {
      console.log(err.response);
      setTodayWeather(null);
    });
  
    setLocationList([]);
  }

  return (
    <div className={classes.root}>
      <div>
        <h3>Please input location name</h3>
        <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Location Search</InputLabel>
          <Input
            name="searchValue"
            value={state.searchValue}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleSearch}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {locationList.length !== 0 && (
          <List style={{ width: 400, height: 300, backgroundColor: '#DEDEDE', overflow: 'auto' }}>
            {locationList.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => handleChooseLocation(item)}>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        )}
      </div>
      {todayWeather && state.searchValue !== '' && (
        <div>
          <h3>Weather of {state.searchValue} on {moment(today).format('DD MMM, YYYY')}</h3>
          <div className={classes.weatherDetailRow}>
            <span style={{ marginRight: 20 }}>Weather State:</span>
            <span>{todayWeather.weather_state_name}</span>
          </div>
          <div className={classes.weatherDetailRow}>
            <span style={{ marginRight: 20 }}>Min Temperature:</span>
            <span>{Math.round(todayWeather.min_temp)}	{'\xB0'}C</span>
          </div>
          <div className={classes.weatherDetailRow}>
            <span style={{ marginRight: 20 }}>Current Temperature:</span>
            <span>{Math.round(todayWeather.the_temp)}	{'\xB0'}C</span>
          </div>
          <div className={classes.weatherDetailRow}>
            <span style={{ marginRight: 20 }}>Max Temperature:</span>
            <span>{Math.round(todayWeather.max_temp)}	{'\xB0'}C</span>
          </div>
          <div className={classes.weatherDetailRow}>
            <span style={{ marginRight: 20 }}>Wind Speed:</span>
            <span>{Math.round(todayWeather.wind_speed)} mph</span>
          </div>
          <div className={classes.weatherDetailRow}>
            <span style={{ marginRight: 20 }}>Wind Direction:</span>
            <span>{Math.round(todayWeather.wind_direction)}{'\xB0'}</span>
          </div>
          <div className={classes.weatherDetailRow}>
            <span style={{ marginRight: 20 }}>Air Pressure:</span>
            <span>{todayWeather.air_pressure} mbar</span>
          </div>
          <div className={classes.weatherDetailRow}>
            <span style={{ marginRight: 20 }}>Humidity:</span>
            <span>{Math.round(todayWeather.humidity)}%</span>
          </div>
          <div className={classes.weatherDetailRow}>
            <span style={{ marginRight: 20 }}>Visibility:</span>
            <span>{Math.round(todayWeather.visibility)} miles</span>
          </div>
          <div className={classes.weatherDetailRow}>
            <span style={{ marginRight: 20 }}>Predictability:</span>
            <span>{Math.round(todayWeather.predictability)}%</span>
          </div>
        </div>
      )}
    </div>
  );
};

LandingPage.propTypes = {
  className: PropTypes.string,
};

export default LandingPage;
