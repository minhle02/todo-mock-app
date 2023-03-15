import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchPage from './screens/SearchPage';
import Screen from './screens';
import {addTaskOnDay, initDatabase, deleteTaskById, getTaskByDay} from './db'
import { useEffect, useState } from 'react';
import * as SQLite from "expo-sqlite";

export default function App() {
  initDatabase();
  return <Screen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});