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



/* import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as SQLite from "expo-sqlite";
import { useState, useEffect } from 'react';

export default function App() {
  const [dataLoading, setDataLoading] = useState(true);
  const [assignments, setAssignments] = useState([]); // array that holds assignmments list
  const [currAssignment, setCurrAssignment] = useState(undefined); // for text input box
  
  const db = SQLite.openDatabase("assignments.db");  // Open the db or create it if needed

  useEffect(() => {
    db.transaction(tx => {
      let sqlcmd = "";
      sqlcmd += "CREATE TABLE IF NOT EXISTS assignments";
      sqlcmd += "  (id INTEGER PRIMARY KEY AUTOINCREMENT,";
      sqlcmd += "   assignment TEXT)";
      tx.executeSql(sqlcmd);
    });

    db.transaction(tx => {
      let sqlcmd = "SELECT * FROM assignments";
      tx.executeSql(sqlcmd, [],
        (_, resultSet) => {
          setAssignments(resultSet.rows._array); // results returned
          console.log(JSON.stringify(resultSet));
        }
      );
    });

    setDataLoading(false);
     
  }, []);  // If an empty array is passed as a parameter useEffect only runs once.

  if (dataLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading assignments...</Text>
      </View>
    );
  }

  const addAssignment = () => {
    db.transaction(tx => {
      let sqlcmd = "";
      sqlcmd += "INSERT INTO assignments (assignment) values (?)";
      tx.executeSql(sqlcmd, [currAssignment],
          (_, resultSet) => {
          let existingAssignments = [...assignments];
          existingAssignments.push({ id: resultSet.insertId, assignment: currAssignment});
          setAssignments(existingAssignments);
        })
    });
  }

  const deleteAssignment = (id) => {
    db.transaction(tx => {
      tx.executeSql("DELETE FROM assignments WHERE ID = ?", [id],
        (_, resultSet) => {
          if (resultSet.rowsAffected > 0) {
            let existingAssignments = [...assignments].filter(assignment => assignment.id != id);
            setAssignments(existingAssignments)
            setCurrAssignment(undefined);
          }
        })
    })
  }

  const updateAssignment = (id) => {
    db.transaction(tx => {
      tx.executeSql("UPDATE assignments SET assignment = ? WHERE ID = ?", [currAssignment, id],
        (_, resultSet) => {
          if (resultSet.rowsAffected > 0) {
            let existingAssignments = [...assignments];
            const indexToUpdate = existingAssignments.findIndex(ass => ass.id === id);
            existingAssignments[indexToUpdate].assignment = currAssignment;
            setAssignments(existingAssignments)
            setCurrAssignment(undefined);
          }
        })
    })
  }

  const showAssignments = () => {
    return assignments.map((assObj) => {
      return (
        <View key={assObj.id} style={styles.row}> 
          <Text>{assObj.assignment}</Text>
          <Button title="D" onPress={() => deleteAssignment(assObj.id)} />
          <Button title="E" onPress={() => updateAssignment(assObj.id)} />
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <TextInput value = {currAssignment} placeholder = "enter assignment" onChangeText={setCurrAssignment} />
      <Button title="Add Assignment" onPress={addAssignment} />
      {showAssignments()}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    margin: 8
  }
}); */