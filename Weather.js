import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

const isNight = () => {
    const hh = new Date().getHours();
    return (hh >= 7 && hh <= 17);
}

const weatherOptions = {
    Clear : {
        iconName: isNight() ? "weather-sunny" : "weather-night",
        gradient: isNight() ? ["#56CCF2", "#2F80ED"] : ["#0F2027", "#203A43", "#2C5364"],
        title: "맑음",
        subtitle: "맑은 날씨입니다."
    },
    Thunderstorm : {
        iconName: "weather-lightning",
        gradient: ["#1f1c2c", "#928dab"],
        title: "번개",
        subtitle: "천둥 번개가 치는 날씨입니다."
    },
    Drizzle : {
        iconName: "weather-rainy",
        gradient: ["#2c3e50", "#bdc3c7"],
        title: "이슬비",
        subtitle: "비가 약간 오는 날씨입니다."
    },
    Rain : {
        iconName: "weather-pouring",
        gradient: ["#2c3e50", "#bdc3c7"],
        title: "비",
        subtitle: "비가 많이 오는 날씨입니다."
    },
    Snow : {
        iconName: "weather-snowy",
        gradient: ["#4c669f", "#fff"],
        title: "눈",
        subtitle: "눈이 내리는 날씨입니다. 미끄럼에 주의하세요!"
    },
    Atmosphere : {
        iconName: "weather-hail",
        gradient: ["#F0C27B", "#4B1248"],
        title: "대기",
        subtitle: "대기라는 날씨입니다?"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#2c3e50", "#bdc3c7"],
        title: "흐림",
        subtitle: "구름이 낀 흐린 날씨입니다."
    }
}

export default function Weather({temp, condition}) {
    return <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={weatherOptions[condition].gradient}
                style={styles.container}>
            <StatusBar barStyle="light-content" />        
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={100} color="white" />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
            </LinearGradient>
           </View>;
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center'
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp: {
        fontSize: 45,
        color: 'white',
        marginTop: 10
    },
    title: {
        color: 'white',
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: 'white',
        fontWeight: '600',
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 40,
        alignItems: "flex-start"
    }
});