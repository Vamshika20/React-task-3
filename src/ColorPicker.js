import React, { useState } from "react";
import "./ColorPicker.css";

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState("");
  const [showColorSquares, setShowColorSquares] = useState(false);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorSquares(false);
  };

  const toggleColorSquares = () => {
    setShowColorSquares(!showColorSquares);
  };

  return (
    <div className="color-picker-container">
        <h1>Color Picker</h1>
      <div
        className="color-preview"
        style={{ backgroundColor: selectedColor }}
      ></div>
      <button onClick={toggleColorSquares}>Pick a color</button>
      {showColorSquares && (
        <div className="color-squares">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-square"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;