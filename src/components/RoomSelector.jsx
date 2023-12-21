
// RoomSelector.js
import React, { useState } from 'react';

const rooms = ['bedroom', 'living room', 'dining room', 'kitchen', 'bathroom'];

function RoomSelector({ onSelect, onSend }) {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);

  const handleRoomChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedRoom(selectedValue);
    onSelect(selectedValue);
    onSend(selectedRoom);
  };


  return (
    <div>
      <label>Select a room:</label>
      <select value={selectedRoom} onChange={handleRoomChange}>
        {rooms.map((room, index) => (
          <option key={index} value={room}>
            {room}
          </option>
        ))}
      </select>

    </div>
  );
}

export default RoomSelector;
