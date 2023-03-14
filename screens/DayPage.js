//Screen 2
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons'


const taskList = [
    { id: 0, content: "Do Math" },
    { id: 1, content: "Do Chemistry" },
    { id: 2, content: "Play game" },
];
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
const DayPage = (props) => {
    //Date info is in props.date
    //Query data!!!
    //Dummy tasklist
    const taskList = [
        { id: 0, content: "Do Math" },
        { id: 1, content: "Do Chemistry" },
        { id: 2, content: "Play game" },
    ];

    let today = new Date(props.date);
    today.setTime(today.getTime() + 14 * 60 * 60 * 1000); //convert local time to UTC
    const screenHandler = props.screenSwitch;
    
    return <SafeAreaView style={styles.container}>
        <StatusBar></StatusBar>
        <View style={styles.topBarWrapper}>
            <Text style={{ fontSize: 30, textTransform: 'uppercase' }}>
                {today.toDateString()}
            </Text>
        </View>
        <View style={styles.contentWrapper}>
            
        </View>
        <View style={styles.bottomButtonBar}>
            {/* Home Button */}
            <Ionicons.Button
                name="arrow-back-circle"
                backgroundColor="black"
                onPress={() => {
                    console.log("Going back to home")
                    screenHandler({ screen: 1, arg: '' })
                }}
            >
                Home
            </Ionicons.Button>

            {/* Add Task */}
            <Ionicons.Button
                name="ios-add-circle-sharp"
                backgroundColor="black"
                onPress={() => {
                    console.log("Going back to home")
                    screenHandler({ screen: 3, arg: props.date })
                }}
            >
                New
            </Ionicons.Button>


            <MaterialCommunityIcons.Button name="delete" backgroundColor="black" onPress={null}>
                Delete
            </MaterialCommunityIcons.Button>
        </View>
    </SafeAreaView>
}

export default DayPage;
