import React from "react";
import ColorPicker from "./ColorPicker";

const colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "brown", "teal", "gray"];

function App() {
  return (
    <div className="App">
      
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;