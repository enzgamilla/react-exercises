import { useEffect, useState } from "react";

const getDog = async (): Promise<string> => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const dog = await res.json();
  return dog.message;
};

const FetchDogAPI = () => {
  const [dogPic, setDogPic] = useState("");

  const fetchDog = async () => {
    const dog = getDog();

    setDogPic(await dog);
  };

  useEffect(() => {
    const fetchInitialDog = async () => {
      const initialDog = await getDog();
      setDogPic(initialDog);
    };

    fetchInitialDog();
  }, []);

  return (
    <div className="flex flex-col space-y-2 justify-center items-center h-screen">
      <img src={dogPic} className="w-32 h-32" />
      <button onClick={fetchDog} className="border w-10">
        🐶
      </button>
    </div>
  );
};

export default FetchDogAPI;
