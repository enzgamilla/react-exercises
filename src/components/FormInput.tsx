import React from "react";

interface InputProps {
  label: string;
  type: string;
  id: string;
  incorrectData: boolean;
  incorrectMessage: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({
  label,
  type,
  id,
  incorrectData,
  incorrectMessage,
  onChange,
}: InputProps) => {
  return (
    <div className="flex flex-col w-72">
      <div className="flex justify-between items-center">
        <label
          htmlFor={id}
          className={`text-sm ${incorrectData && "text-red-500"}`}
        >
          {label}
        </label>
        {incorrectData && (
          <label htmlFor={id} className="text-xs text-center text-red-500">
            {incorrectMessage}
          </label>
        )}
      </div>
      <input
        type={type}
        id={id}
        onChange={onChange}
        className={`border shadow-sm outline-cyan-300 rounded-sm text-sm p-1`}
      />
    </div>
  );
};

export default FormInput;
