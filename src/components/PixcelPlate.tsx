interface Props {
  bgColor: string;
  onClick: () => void;
}

const PixcelPlate = ({ bgColor, onClick }: Props) => {
  return (
    <div
      className={`w-2 h-2 border ${bgColor} bg-gray-400`}
      onClick={onClick}
    ></div>
  );
};

export default PixcelPlate;
