import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading() {
    {/* 
        View는 div 역할.
        글자는 Text 태그안에 넣어야한다. 
        style은 각 태그별로 줘야함. 
        css와는 다르게 부모로부터 상속받지 않는다.
    */}
    return <View style={styles.container}> 
        <StatusBar barStyle='dark-content' />
        <Text style={styles.text}>날씨 정보를 가져오는 중입니다.</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA"
    },
    text: {
        color: '#2c2c2c',
        fontSize: 30, // ''으로 적을땐 px 붙여야함 
        fontWeight: 'bold'
    }
});

