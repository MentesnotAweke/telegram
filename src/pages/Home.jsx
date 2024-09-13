// pages/Home.jsx
import React from "react";
import TaskBar from "../components/TaskBar";

const Home = () => {
  return (
    <div className="bg-black w-screen h-screen p-2 flex-col">
      <div className="bg-gray-900 mt-24 p-2 rounded-md flex justify-around">
        <img
          src="src\assets\shootingStar.png"
          alt="image part"
          className="h-8 w-6 -ml-3"
        />
        <button className="bg-gray-700 px-2 rounded-3xl ml-2">open</button>
      </div>
      <div className="justify-items-stretch">
        <button className="bg-white text-black mt-96 p-2 mr-1 rounded-md w-full ">
          Start Farming
        </button>
      </div>
      <TaskBar />
    </div>
  );
};

export default Home;
