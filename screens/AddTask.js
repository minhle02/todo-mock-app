//Screen 3
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Dimensions, TextInput } from 'react-native';
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
        alignItems: 'flex-start',
        backgroundColor: 'lightgreen',
    },
    bottomButtonBar: {
        flex: 1,
        width: windowWidth,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'pink',
        flexDirection: 'row',
    },
    inputText: {
        borderWidth: 1,
        width: '95%',
        margin: 10,
        alignSelf: 'center'
    }
})

const AddTask = (props) => {
    const screenHandler = props.screenSwitch;

    //Text Input
    let date = new Date(Date.now());
    date.setTime(date.getTime() + 60 * 60 * 1000 * 14);

    const [dateInput, setDateInput] = useState("3/12/23");
    const [taskInput, setTaskInput] = useState();

    return <SafeAreaView style={styles.container}>
        <StatusBar></StatusBar>
        <View style={styles.topBarWrapper}>
            <Text style={{ fontSize: 30, textTransform: 'uppercase' }}>
                Add Task
            </Text>
        </View>

        <View style={styles.contentWrapper}>
            <Text>Date:</Text>
            <TextInput
                style={styles.inputText}     
                value={dateInput}
                onChangeText={setDateInput}
            />

            <Text>Task:</Text>
            <TextInput
                style={styles.inputText}
                placeholder="What to do"
                onChangeText={setTaskInput}
            />
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

            <Ionicons.Button
                name="checkmark-circle"
                backgroundColor="black"
                onPress={() => {
                    
                }}
            >
                Submit
            </Ionicons.Button>
        </View>
    </SafeAreaView>
}

export default AddTask;