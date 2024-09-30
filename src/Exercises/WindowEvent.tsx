import { useEffect, useState } from "react";

const WindowEvent = () => {
  const [doubleClick, setDoubleClick] = useState(false);

  useEffect(() => {
    const handleDoubleClick = (e: MouseEvent) => {
      console.log(e);
      alert("Window event doubclick");
    };

    if (doubleClick) {
      window.addEventListener("dblclick", handleDoubleClick);
    }

    return () => {
      window.removeEventListener("dblclick", handleDoubleClick);
    };
  }, []);

  return (
    <div>
      <button
        className="border m-5 p-5"
        onClick={() => setDoubleClick(!doubleClick)}
      >
        Toggle Window Envent
      </button>
      {doubleClick && <h1 className="p-5">Button has been doubleClicked</h1>}
    </div>
  );
};

export default WindowEvent;
