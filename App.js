import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import Weather from "./Weather";

const API_KEY = "1729c3164570426fdf23cd0dfb564980";

export default class App extends Component {
  state = {
    isLoaded: false,
    error:null,
    temperature:null,
    name:null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude,position.coords.longitude);
      },
      error => {
        this.setState({
          error:error
        })
      }
      
      );
  }

  _getWeather = (lat, long) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    )
      .then(response => response.json())
      .then(json => {
          this.setState({
            temperature:json.main.temp,
            name:json.weather[0].main
          })
      });
  }

  render() {
    const { isLoaded, error } = this.state;
    return (
      <View style={styles.container}>
        {isLoaded ? (
          <Weather />
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the weather App...</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  errorText:{
    color:"red",
    backgroundColor:"transparent" 
  },
  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 28,
    marginBottom: 100
  }
});
