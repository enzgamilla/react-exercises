import { useState } from "react";
import PixcelPlate from "../components/PixcelPlate";

const colorPlate = [
  { key: 1, color: "bg-red-500" },
  { key: 2, color: "bg-pink-500" },
  { key: 3, color: "bg-yellow-500" },
  { key: 4, color: "bg-green-500" },
  { key: 5, color: "bg-black" },
  { key: 6, color: "bg-gray-500" },
];

const initialGridPlate = [
  [
    { key: "0-0", color: "border-gray-200" },
    { key: "0-1", color: "border-gray-200" },
    { key: "0-2", color: "border-gray-200" },
    { key: "0-3", color: "border-gray-200" },
    { key: "0-4", color: "border-gray-200" },
  ],
  [
    { key: "1-0", color: "border-gray-200" },
    { key: "1-1", color: "border-gray-200" },
    { key: "1-2", color: "border-gray-200" },
    { key: "1-3", color: "border-gray-200" },
    { key: "1-4", color: "border-gray-200" },
  ],
  [
    { key: "2-0", color: "border-gray-200" },
    { key: "2-1", color: "border-gray-200" },
    { key: "2-2", color: "border-gray-200" },
    { key: "2-3", color: "border-gray-200" },
    { key: "2-4", color: "border-gray-200" },
  ],
  [
    { key: "3-0", color: "border-gray-200" },
    { key: "3-1", color: "border-gray-200" },
    { key: "3-2", color: "border-gray-200" },
    { key: "3-3", color: "border-gray-200" },
    { key: "3-4", color: "border-gray-200" },
  ],
  [
    { key: "4-0", color: "border-gray-200" },
    { key: "4-1", color: "border-gray-200" },
    { key: "4-2", color: "border-gray-200" },
    { key: "4-3", color: "border-gray-200" },
    { key: "4-4", color: "border-gray-200" },
  ],
];

const PixcelArt = () => {
  const [selectedColor, setSelectedColor] = useState("border-gray-200");
  const [grids, setGrids] = useState(initialGridPlate);

  const handlePlateClick = (yIndex: number, xIndex: number) => {
    const updatedColorGridPlate = grids.map((row, rIndex) =>
      row.map((cell, cIndex) =>
        rIndex === yIndex && cIndex === xIndex
          ? { ...cell, color: selectedColor }
          : cell
      )
    );

    setGrids(updatedColorGridPlate);
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-1 h-screen">
      <div className="flex justify-center items-center space-x-1">
        {colorPlate.map((color) => (
          <PixcelPlate
            key={color.key}
            bgColor={color.color}
            onClick={() => setSelectedColor(color.color)}
          />
        ))}
      </div>
      <div className="flex flex-col space-y-1">
        {grids.map((colGrid, yIndex) => (
          <div
            key={yIndex}
            className="flex justify-center items-center space-x-1"
          >
            {colGrid.map((plate, xIndex) => (
              <PixcelPlate
                key={plate.key}
                bgColor={plate.color}
                onClick={() => handlePlateClick(yIndex, xIndex)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PixcelArt;
