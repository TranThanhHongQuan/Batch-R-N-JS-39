import React, { useState } from 'react';
import './Exercise1.css';

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

const ColorPicker = () => {
    const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    console.log(`Đang chọn màu: ${color}`);
    setSelectedColor(color);
  };

  return (
    <div className="color-picker">
      {colors.map((color) => (
        <div
          key={color}
          className={`color-box ${selectedColor === color ? 'active' : ''}`}
          style={{ backgroundColor: color }}
          onClick={() => handleColorClick(color)}
        >
          {color}
        </div>
      ))}
    </div>
  );
};

export default ColorPicker;
