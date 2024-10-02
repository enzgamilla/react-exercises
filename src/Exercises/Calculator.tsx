import { useReducer } from "react";
import CalculatorBtn from "../components/CalculatorBtn";

const num = [
  ["0", "1", "2"],
  ["3", "4", "5"],
  ["6", "7", "8"],
  ["9", "Clear", "="],
];

const operations = ["+", "-", "X", "/"];

interface CalculatorState {
  currentInput: string;
  prevValue: string | null;
  operation: string | null;
  isEvaluated: boolean;
}

type CalculatorAction =
  | { type: "ADD_NUM"; payload: string }
  | { type: "SET_OPERATION"; payload: string }
  | { type: "EVALUATE" }
  | { type: "CLEAR" };

const initialState: CalculatorState = {
  currentInput: "0",
  prevValue: null,
  operation: null,
  isEvaluated: false,
};

const reducer = (
  state: CalculatorState,
  action: CalculatorAction
): CalculatorState => {
  switch (action.type) {
    case "ADD_NUM":
      return {
        ...state,
        currentInput:
          state.currentInput === "0" || state.isEvaluated
            ? action.payload
            : state.currentInput + action.payload,
        isEvaluated: false,
      };
    case "SET_OPERATION":
      return {
        ...state,
        operation: action.payload,
        prevValue: state.currentInput,
        currentInput: "0",
      };
    case "EVALUATE":
      if (state.operation && state.prevValue !== null) {
        const current = parseFloat(state.currentInput);
        const previous = parseFloat(state.prevValue);
        let result: number;

        switch (state.operation) {
          case "+":
            result = previous + current;
            break;
          case "-":
            result = previous - current;
            break;
          case "X":
            result = previous * current;
            break;
          case "/":
            result = previous / current;
            break;
          default:
            return state;
        }
        return {
          ...state,
          currentInput: String(result),
          prevValue: null,
          operation: null,
          isEvaluated: true,
        };
      }
      return state;
    case "CLEAR":
      return initialState;
    default:
      return state;
  }
};

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNumberClick = (num: string) => {
    dispatch({ type: "ADD_NUM", payload: num });
  };

  const handleOperationClick = (operation: string) => {
    dispatch({ type: "SET_OPERATION", payload: operation });
  };

  const handleEqualsClick = () => {
    dispatch({ type: "EVALUATE" });
  };

  const handleClearClick = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <div className="flex flex-col pt-5 items-center h-screen space-y-2">
      <p>{state.currentInput}</p>
      <div className="flex space-x-2">
        <div className="flex flex-col space-y-1">
          {num.map((btn, iBtn) => (
            <div
              key={iBtn}
              className="flex justify-center items-center space-x-1"
            >
              {btn.map((num, iNum) => (
                <CalculatorBtn
                  key={`${iBtn}-${iNum}`}
                  label={num}
                  onClick={() => {
                    if (num === "=") {
                      handleEqualsClick();
                    } else if (num === "Clear") {
                      handleClearClick();
                    } else {
                      handleNumberClick(num);
                    }
                  }}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-1">
          {operations.map((op, index) => (
            <CalculatorBtn
              key={index}
              label={op}
              onClick={() => handleOperationClick(op)} // Fix: pass the correct operation here
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
