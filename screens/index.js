import SearchPage from "./SearchPage";
import DayPage from "./DayPage";
import AddTask from "./AddTask";
import React, { useState } from "react";
import {Button, Pressable, View, Text} from 'react-native'


const NavigationScreen = () => {
    const [DisplayScreen, setDisplayScreen] = useState({ screen: 0, arg: "" });
    let screenNum = DisplayScreen.screen;
    switch (screenNum) {
        case 1:
            return <SearchPage screenSwitch={setDisplayScreen} />
        case 2:
            return <DayPage date={DisplayScreen.arg} screenSwitch={setDisplayScreen} />;
        default:
            return <AddTask screenSwitch={setDisplayScreen} date={DisplayScreen.arg}/>;
        
    }
}

export default NavigationScreen;