import { useState, useEffect } from "react";
import * as SQLite from "expo-sqlite";

const initDatabase = () => {
    const db = SQLite.openDatabase("taskData.db");
    useEffect(() => {
        db.transaction(tx => {
            let sqlcmd = "create table if not exists tasks (";
            sqlcmd += "id integer primary key autoincrement, ";
            sqlcmd += "content text, ";
            sqlcmd += "date text ";
            sqlcmd += "month text"
            tx.executeSql(sqlcmd);
        })

        db.transaction(tx => {
        let sqlcmd = "select * from tasks";
        tx.executeSql(sqlcmd, [], (_, resultSet) => {
        console.log("Initialized: ", JSON.stringify(resultSet));
        })
    })
    }, [])
}

const addTaskOnDay = (day, task) => {
    const db = SQLite.openDatabase("taskData.db");
        db.transaction(tx => {
            let sqlcmd = "insert into tasks (content, date) values (?,?)";
            tx.executeSql(sqlcmd, [task, day,],
                (_, resultSet) => {
                    console.log("Added successful: ", JSON.stringify(resultSet));
                }
            )
        })
    
}

const deleteTaskById = (id) => {
    const db = SQLite.openDatabase("taskData.db");
    db.transaction(tx => {
            let sqlcmd = "delete from tasks where id = ?";
            tx.executeSql(sqlcmd, [id],
                (_, resultSet) => {
                    console.log("Delete successful: ", JSON.stringify(resultSet));
                }
            )
        })
}

const getTaskByDay = (day, setDayHandler) => {
    const db = SQLite.openDatabase("taskData.db");
    let taskList = [];
    useEffect(() => {
        db.transaction(tx => {
            let sqlcmd = "select * from tasks where date = ?";
            tx.executeSql(sqlcmd, [day],
                (_, resultSet) => {
                    console.log("Querying event from day: ", JSON.stringify(resultSet));
                    setDayHandler(resultSet.rows._array);
                }
            )
        })
    }, [])
}
export { initDatabase, addTaskOnDay, deleteTaskById, getTaskByDay };
