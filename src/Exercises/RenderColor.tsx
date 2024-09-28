import { useState } from "react";
import ColorBtn from "../components/ColorBtn";

const RenderColor = () => {
  const colorButton = [
    {
      name: "Cornflower Blue",
      color: "bg-blue-400",
    },
    {
      name: "Persian Pink",
      color: "bg-pink-400",
    },
    {
      name: "Screamin Green",
      color: "bg-green-400",
    },
    {
      name: "Tart Orange",
      color: "bg-orange-700",
    },
  ];

  const [color, setColor] = useState("bg-white");

  return (
    <div className={`${color} min-h-screen`}>
      <div className="flex space-x-3 p-5 justify-center">
        {colorButton.map((btn, index) => (
          <ColorBtn
            key={index}
            name={btn.name}
            color={btn.color}
            onChange={() => setColor(btn.color)}
          />
        ))}
      </div>
    </div>
  );
};

export default RenderColor;
