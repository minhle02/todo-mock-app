//Screen 3
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Dimensions, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { addTaskOnDay } from '../db';

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
        backgroundColor: 'white',
    },
    bottomButtonBar: {
        flex: 1,
        width: windowWidth,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    inputText: {
        borderWidth: 1,
        width: '95%',
        margin: 10,
        alignSelf: 'center',
        height: '6%',
        fontSize: 25
    },
    titleField: {
        fontSize: 20,
        marginTop: 12
    }
})

const AddTask = (props) => {
    const screenHandler = props.screenSwitch;

    let date;

    if (props.date === undefined || props.date === "") {
        date = new Date(Date.now());
    }
    date = new Date(props.date);
    date.setTime(date.getTime() + 60 * 60 * 1000 * 14);

    let dayDB = date.getDate();
    dayDB = (dayDB >= 10) ? dayDB.toString() : ("0" + dayDB.toString());

    let monthDB = date.getMonth() + 1;
    monthDB = (monthDB >= 10) ? monthDB.toString() : ("0" + monthDB.toString());
    let yearDB = date.getFullYear().toString();
    let dayString = yearDB + "-" + monthDB + "-" + dayDB;

    const [dateInput, setDateInput] = useState(dayString);
    const [taskInput, setTaskInput] = useState();

    const submitHandler = () => {
        let regex = new RegExp("[0-9]{4}-[0-1][0-9]-[0-3][0-9]");
        if (regex.test(dateInput) && taskInput !== undefined && taskInput !== "") {
            addTaskOnDay(dateInput, taskInput);
            screenHandler({ screen: 1, arg: "" });
        }
        console.log(taskInput)
        console.log(regex.test(dateInput))
        console.log(dateInput)
    }

    return <SafeAreaView style={styles.container}>
        <StatusBar></StatusBar>
        <View style={styles.topBarWrapper}>
            <Text style={{ fontSize: 30, textTransform: 'uppercase' }}>
                Add Task
            </Text>
        </View>

        <View style={styles.contentWrapper}>
            <Text style={styles.titleField}>Date:</Text>
            <TextInput
                style={styles.inputText}     
                value={dateInput}
                onChangeText={setDateInput}
            />

            <Text style={styles.titleField}>Task:</Text>
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
                onPress={submitHandler}
            >
                Submit
            </Ionicons.Button>
        </View>
    </SafeAreaView>
}

export default AddTask;