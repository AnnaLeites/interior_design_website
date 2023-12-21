// src/App.js
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import RoomSelector from './components/RoomSelector';
import TextInput from './components/TextInput';
import DisplayResults from './components/DisplayResults';

function App() {
  const [selectedRoom, setSelectedRoom] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [results, setResults] = useState([]);

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
  };

  const handleInputChange = (input) => {
    setInputValue(input);
  };

  const sendToBackend = async () => {
    const backendUrl = 'http://localhost:3001/processData';

    const response = await fetch(backendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ selectedRoom, inputValue }),
    });

    if (response.ok) {
      const { imgUrls } = await response.json();
      setResults(imgUrls);
    } else {
      console.error('Error sending data to the backend');
    }
  };

  return (
    <div className="App">
      <Header />
      <RoomSelector onSelect={handleRoomSelect} onSend={sendToBackend} />
      <TextInput onChange={handleInputChange} onSend={sendToBackend} />
      <DisplayResults imgUrls={results} />
      {/* Other components as needed */}
    </div>
  );
}

export default App;