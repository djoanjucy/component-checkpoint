import React from 'react';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import './App.css';

function App() {
  const contacts = [
    {
      id: "1",
      name: "Dipesh",
      email:"malvia@gmail.com",
    },
     {
      id: "2",
      name: "Desh",
      email:"dudek@gmail.com",
    },
  ];
  return (
    <div  className="ui container">
      <Header/>
      <AddContact/> 
      <ContactList/>
    </div>
  );
}

export default App;
