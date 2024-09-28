interface Props {
  name: string;
  color: string;

  onChange: () => void;
}

const ColorBtn = ({ name, color, onChange }: Props) => {
  return (
    <>
      <button
        className={`${color} p-8 shadow-2xl rounded-xl font-semibold text-white hover:outline-double`}
        onClick={onChange}
      >
        {name}
      </button>
    </>
  );
};

export default ColorBtn;
