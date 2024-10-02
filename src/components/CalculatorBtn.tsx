const CalculatorBtn = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <div>
      <button
        className="border p-10 font-semibold text-sm justify-center items-center hover:bg-slate-200"
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default CalculatorBtn;
