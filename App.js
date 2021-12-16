import React from 'react';
import Loading from './Loading';
import Weather from './Weather';
import { Alert } from 'react-native';
import axios from 'axios';
import * as Location from 'expo-location';

const API_KEY = "52e9e1fa1fa95fbea206e13a52dec9f5";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const { data: {main: {temp}, weather} } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false, 
      temp: temp,
      condition: weather[0].main,
    });
  };
  getLocation = async() => {
    try {
      await Location.requestForegroundPermissionsAsync();
      await Location.requestBackgroundPermissionsAsync();
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      
    } catch(error) {
      Alert.alert("Cant't find you", "So sad")
    }
  };
  componentDidMount() {
    this.getLocation()
  };
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}

