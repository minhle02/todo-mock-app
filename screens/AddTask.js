//Screen 3
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    topBarWrapper: {
        flex: 1,
        width: windowWidth,
        alignItems: 'center',
        backgroundColor: 'lightblue',
        justifyContent: 'center',
    },
    contentWrapper: {
        flex: 9,
        width: windowWidth,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgreen',
    },
    bottomButtonBar: {
        flex: 1,
        width: windowWidth,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'pink',
        flexDirection: 'row',
    }
})

const AddTask = (props) => {
    const screenHandler = props.screenSwitch;
    return <SafeAreaView style={styles.container}>
        <StatusBar></StatusBar>
        <View style={styles.topBarWrapper}>
            <Text style={{ fontSize: 30, textTransform: 'uppercase' }}>
                Add Task
            </Text>
        </View>

        <View style={styles.contentWrapper}>
            
        </View>

        <View style={styles.bottomButtonBar}>
            <Ionicons.Button
                name="arrow-back-circle"
                backgroundColor="black"
                onPress={() => {
                    screenHandler({screen: 2, arg: props.date})
                }}
            >
                Back
            </Ionicons.Button>
        </View>
    </SafeAreaView>
}

export default AddTask;