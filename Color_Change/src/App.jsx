import { useState } from "react";
import { useCallback } from "react";
import "./App.css";

const ColorButton = ({ color, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`text-white bg-gradient-to-r from-${color}-400 via-${color}-500 to-${color}-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-${color}-300 dark:focus:ring-${color}-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}
  >
    {color.charAt(0).toUpperCase() + color.slice(1)}
  </button>
);

function App() {
  const [color, setColor] = useState("black");

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <>
      <div
        className="flex items-center justify-center h-screen"
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-col items-center">
          <div className="flex flex-row content-center justify-center w-full">
            <ColorButton color="green" onClick={() => handleColorChange("green")} />
            <ColorButton color="cyan" onClick={() => handleColorChange("cyan")} />
            <ColorButton color="teal" onClick={() => handleColorChange("teal")} />
            <button type="button"  onClick={() => handleColorChange("wheat")} class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Wheat</button>
            <ColorButton color="red" onClick={() => handleColorChange("red")} />
            <ColorButton color="pink" onClick={() => handleColorChange("pink")} />
            <button type="button"  onClick={() => handleColorChange("purple")} class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Purple</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;