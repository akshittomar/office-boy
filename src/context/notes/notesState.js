import React from "react";
import var1 from "./noteContext"
import { useState } from "react";
const NoteState = (props) =>{
    const state = {
        "name" : "AKSHIT",
        "class" : "5D"
    }


const notesInitial = [
    {
      "time": "4",
      "alarmTime": "4",
      "_id": "63b6c64df2be7fa5abe440af",
      "user": "63b550af0fa7f37c1cad976b",
      "title": "My Title",
      "description": "Please send me your file",
      "tag": "profeesional",
      "date": "2023-01-05T12:45:01.219Z",
      "__v": 0
    },
    {
      "time": "4",
      "alarmTime": "4",
      "_id": "63b6c64ff2be7fa5abe440b1",
      "user": "63b550af0fa7f37c1cad976b",
      "title": "My Title",
      "description": "Please send me your file",
      "tag": "profeesional",
      "date": "2023-01-05T12:45:03.468Z",
      "__v": 0
    },
    {
      "alarmTime": "4",
      "_id": "63b6c8085da7ceb7e52cd869",
      "user": "63b550af0fa7f37c1cad976b",
      "title": "My Title",
      "description": "Please send me your file",
      "tag": "profeesional",
      "time": "4",
      "date": "2023-01-05T12:52:24.042Z",
      "__v": 0
    },
    {
      "alarmTime": "4",
      "_id": "63b6c80a5da7ceb7e52cd86b",
      "user": "63b550af0fa7f37c1cad976b",
      "title": "My Title",
      "description": "Please send me your file",
      "tag": "profeesional",
      "time": "4",
      "date": "2023-01-05T12:52:26.645Z",
      "__v": 0
    },
    {
      "_id": "63b6c9ea47eda57476d4b38c",
      "user": "63b550af0fa7f37c1cad976b",
      "title": "My Title",
      "description": "Please send me your file",
      "tag": "profeesional",
      "time": "4",
      "alarmTime": "6",
      "date": "2023-01-05T13:00:26.801Z",
      "__v": 0
    },
    {
      "_id": "63b6c9ec47eda57476d4b38e",
      "user": "63b550af0fa7f37c1cad976b",
      "title": "My Title",
      "description": "Please send me your file",
      "tag": "profeesional",
      "time": "4",
      "alarmTime": "6",
      "date": "2023-01-05T13:00:28.935Z",
      "__v": 0
    },
    {
      "_id": "63b6cac05d86834c03273719",
      "user": "63b550af0fa7f37c1cad976b",
      "title": "My Title",
      "description": "Please send me your file",
      "tag": "profeesional",
      "time": "4",
      "alarmTime": "6",
      "shareEmail": "kjdfgkljgdlkjsg@gmail.com",
      "date": "2023-01-05T13:04:00.983Z",
      "__v": 0
    },
    {
      "_id": "63b6cac25d86834c0327371b",
      "user": "63b550af0fa7f37c1cad976b",
      "title": "My Title",
      "description": "Please send me your file",
      "tag": "profeesional",
      "time": "4",
      "alarmTime": "6",
      "shareEmail": "kjdfgkljgdlkjsg@gmail.com",
      "date": "2023-01-05T13:04:02.311Z",
      "__v": 0
    },
    {
      "_id": "63b6cb0f438957ced7f0aa73",
      "user": "63b550af0fa7f37c1cad976b",
      "title": "My Title",
      "description": "Please send me your file",
      "tag": "profeesional",
      "time": "4",
      "alarmTime": "6",
      "shareEmail": "kjdfgkljgdlkjsg@gmail.com",
      "date": "2023-01-05T13:05:19.091Z",
      "__v": 0
    },
    {
      "_id": "63b6cb29438957ced7f0aa75",
      "user": "63b550af0fa7f37c1cad976b",
      "title": "My Title",
      "description": "Please send me your file",
      "tag": "profeesional",
      "time": "4",
      "alarmTime": "6",
      "shareEmail": "kjdfgkljgdlkj@sggmail.com",
      "date": "2023-01-05T13:05:45.962Z",
      "__v": 0
    },
    {
      "_id": "63b6dc6daeaffc157afa1567",
      "user": "63b550af0fa7f37c1cad976b",
      "title": "My Title",
      "description": "Please send me your file",
      "tag": "profeesional",
      "time": "4",
      "alarmTime": "6",
      "shareEmail": "kjdfgkljgdlkj@sggmail.com",
      "date": "2023-01-05T14:19:25.500Z",
      "__v": 0
    },
    {
      "_id": "63b6dc6faeaffc157afa1569",
      "user": "63b550af0fa7f37c1cad976b",
      "title": "My Title",
      "description": "Please send me your file",
      "tag": "profeesional",
      "time": "4",
      "alarmTime": "6",
      "shareEmail": "kjdfgkljgdlkj@sggmail.com",
      "date": "2023-01-05T14:19:27.114Z",
      "__v": 0
    },
    {
      "_id": "63b6dc6faeaffc157afa156b",
      "user": "63b550af0fa7f37c1cad976b",
      "title": "My Title",
      "description": "Please send me your file",
      "tag": "profeesional",
      "time": "4",
      "alarmTime": "6",
      "shareEmail": "kjdfgkljgdlkj@sggmail.com",
      "date": "2023-01-05T14:19:27.547Z",
      "__v": 0
    },
    {
      "_id": "63b6dc70aeaffc157afa156d",
      "user": "63b550af0fa7f37c1cad976b",
      "title": "My Title",
      "description": "Please send me your file",
      "tag": "profeesional",
      "time": "4",
      "alarmTime": "6",
      "shareEmail": "kjdfgkljgdlkj@sggmail.com",
      "date": "2023-01-05T14:19:28.801Z",
      "__v": 0
    },
    {
      "_id": "63b78c4e53afaf0a84d1306b",
      "user": "63b550af0fa7f37c1cad976b",
      "title": "My Title",
      "description": "Please send me your file",
      "tag": "profeesional",
      "time": "4",
      "alarmTime": "6",
      "shareEmail": "kjdfgkljgdlkj@sggmail.com",
      "date": "2023-01-06T02:49:50.257Z",
      "__v": 0
    },
    {
      "_id": "63b7f210e227d8dd45b5eac8",
      "user": "63b550af0fa7f37c1cad976b",
      "title": "My Title",
      "description": "Please send me your file",
      "tag": "profeesional",
      "time": "4",
      "alarmTime": "6",
      "shareEmail": "kjdfgkljgdlkj@sggmail.com",
      "date": "2023-01-06T10:04:00.130Z",
      "__v": 0
    }
  ]


  const [notes, setnotes] = useState(notesInitial);
    return (

        <var1.Provider value={{state,notes,setnotes}}>
            {props.children}
        </var1.Provider>
    )
}

export default NoteState;