import SearchPage from "./SearchPage";
import DayPage from "./DayPage";
import AddTask from "./AddTask";
import React, { useState } from "react";
import TaskList from "../components/TaskList";
import { Button, Pressable, View, Text } from 'react-native'


const NavigationScreen = (props) => {
    const [DisplayScreen, setDisplayScreen] = useState({ screen: 1, arg: "" });
    let screenNum = DisplayScreen.screen;
    switch (screenNum) {
        case 1:
            return <SearchPage
                screenSwitch={setDisplayScreen}
                db={props.db}
            />
        case 2:
            return <DayPage
                date={DisplayScreen.arg}
                screenSwitch={setDisplayScreen}
                db={props.db}
            />;
        case 3:
            return <AddTask
                screenSwitch={setDisplayScreen}
                date={DisplayScreen.arg}
                db={props.db}
            />;
        
    }
}

export default NavigationScreen;