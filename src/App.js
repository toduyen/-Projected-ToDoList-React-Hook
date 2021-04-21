import './App.css';
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import ToDoList from './components/ToDoList';
import React, { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [ToDo, setToDo] = useState([]);
  const [ListenerOnChange, setListenerOnChange] = useState("");

  useEffect(()=>{
    const gaitrimacdinh = localStorage.getItem('HAHAHAs');
    if(gaitrimacdinh)
    {
      setToDo(JSON.parse(gaitrimacdinh))
    }
  },[])

  useEffect(()=> {
    localStorage.setItem('HAHAHAs',JSON.stringify(ToDo));
  },[ToDo])




  const onAddEventTextInput = useCallback( (event) => {
    setListenerOnChange(event.target.value);
  },[]);

  const onAddData = useCallback(() => {
    setToDo([...ToDo,{id: uuidv4() , name: ListenerOnChange , trangthai: false}]);
    setListenerOnChange('');
  },[ToDo,ListenerOnChange])


  

  const chuyendoiTrangThai = useCallback((id) => {
    setToDo((prevState) => prevState.map((value) => value.id === id ? {...value,trangthai:true} : value));
  },[setToDo])
  return (
    <>
      <p>Hello in the word</p>
       <Textfield
        aria-label="customized text field"
        css={{
          // container style
          padding: 5,
          '& > [data-ds--text-field--input]': {
            // input style
            fontSize: 10,
          },
        }}
        name="textviewer"
        placeholder="Nhap gi do vao di"
        onChange={onAddEventTextInput}
        elemAfterInput={
          <Button appearance="warning" isDisabled={!ListenerOnChange} onClick={onAddData}>Warning button</Button>
        }
      />
       <ToDoList ToDos={ToDo} chuyendoiTrangThai={chuyendoiTrangThai}/>
    </>
  );
}

export default App;
