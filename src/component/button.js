import React from 'react';
import {TouchableOpacity, StyleSheet, Text, ActivityIndicator} from 'react-native';


export const Button = ({onPress, text, containerStyle, disabled, loading}) => (
    <TouchableOpacity style={{
        ...styles.containerStyle,
        ...containerStyle,
        backgroundColor: disabled ? "#BFBFBF" : "#825eeb"
    }}
                      disabled={disabled || loading}
                      onPress={onPress}
    >
        <Text style={styles.text}>{text}</Text>
        {loading && <ActivityIndicator color={"#FFF"} style={styles.indicator}/>}


    </TouchableOpacity>
)


const styles = StyleSheet.create({
    containerStyle: {
        borderRadius: 30,
        flexDirection: "row",
        height: 60,
    },
    text: {
        fontSize: 14,
        flex: 1,
        fontWeight: "500",
        fontStyle: "normal",
        alignSelf: "center",
        letterSpacing: 0,
        textAlign: "center",
        color: "#FFF",
    },
    indicator: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 16,
    }
});