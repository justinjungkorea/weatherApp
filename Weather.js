import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title: "비 오는 중",
    subtitle: "더 많은 정보를 원한다면 밖을 보세요!",
    icon: "weather-pouring"
  },
  Clear: {
    colors: ["FEF253", "#FF7300"],
    title: "맑은 날씨",
    subtitle: "밖으로 나갑시다 그전에 미세먼지 확인!",
    icon: "weather-sunny"
  },
  Thunderstorm: {
    colors: ["00ECBC", "#007ADF"],
    title: "폭풍우",
    subtitle: "양말까지 젖을 거니까 조심하세요!",
    icon: "weather-lightning-rainy"
  },
  Cloud: {
    colors: ["#D7D2CC", "#304352"],
    title: "흐림",
    subtitle: "기분까지 우울해 하지는 마세요",
    icon: "weather-cloudy"
  },
  Snow: {
    colors: ["#7DE2FC", "#B9B6E5"],
    title: "눈 오는 중",
    subtitle: "길이 미끄러우니까 조심하세요",
    icon: "weather-snowy"
  },
  Drizzle: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "보슬 비가 내리는 중",
    subtitle: "우산까지는 필요없어요",
    icon: "weather-rainy"
  },
  Haze: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "실안개",
    subtitle: "우산까지는 필요없어요",
    icon: "weather-fog"
  },
  Mist: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "옅은 안개",
    subtitle: "우산까지는 필요없어요",
    icon: "weather-fog"
  }
};

function Weather({ weatherName, temp }) {
  return (
    <LinearGradient
      colors={weatherCases[weatherName].colors}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.upper}>
        <MaterialCommunityIcons
          color="white"
          size={144}
          name={weatherCases[weatherName].icon}
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>
          {weatherCases[weatherName].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  temp: {
    fontSize: 50,
    backgroundColor: "transparent",
    color: "white",
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  title: {
    fontSize: 30,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 10,
    fontWeight: "300"
  },
  subtitle: {
    fontSize: 20,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24
  }
});