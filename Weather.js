import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from 'prop-types';
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

export default function Weather({temp, condition}) {
    return <View style={styles.container}>
            <View style={styles.halfContainer}>
                <Entypo name="cloud" size={130} color="black" />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.halfContainer}></View>
           </View>;
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    condotion: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds"]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp: {
        fontSize: 50
    }
});