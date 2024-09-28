import React, { useState } from "react";
import FormInput from "../components/FormInput";

const SignupForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [incorrectEmail, setIncorrectEmail] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const [incorrectCPass, setIncorrectCPass] = useState(false);

  const inputProperties = [
    {
      label: "Email",
      type: "email",
      id: "email",
      incorrectData: incorrectEmail,
      message: "Provide valid email.",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value),
    },
    {
      label: "Password",
      type: "password",
      id: "password",
      incorrectData: incorrectPassword,
      message: "Password does not match",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setPassword(e.target.value),
    },
    {
      label: "Confirm Password",
      type: "password",
      id: "cpassword",
      incorrectData: incorrectCPass,
      message: "Password does not match",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setConfirmPassword(e.target.value),
    },
  ];

  const validateForm = () => {
    const emailValid = email.includes("@");
    const passwordValid = password === confirmPassword;

    setIncorrectEmail(!emailValid);
    setIncorrectPassword(!passwordValid);
    setIncorrectCPass(!passwordValid);
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    validateForm();

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="grid justify-center space-y-4 pt-5">
        <div className="text-center font-semibold">Sign Up!</div>

        {inputProperties.map((input, index) => (
          <FormInput
            key={index}
            label={input.label}
            type={input.type}
            id={input.id}
            incorrectData={input.incorrectData}
            incorrectMessage={input.message}
            onChange={input.onChange}
          />
        ))}

        <div className="flex justify-center">
          <button className="border rounded-lg bg-blue-500 text-white font-semibold text-xs p-2 w-20 hover:bg-blue-400 hover:cursor-pointer transition-all duration-200 ease-in-out transform active:bg-blue-700 active:scale-95">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
