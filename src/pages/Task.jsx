// pages/Task.jsx
import React from "react";
import TaskBar from "../components/TaskBar";

const Task = () => {
  return (
    <div className="bg-black w-screen h-screen p-2">
      <h1 className="text-white text-2xl text-center">Task Page</h1>
      <TaskBar />
    </div>
  );
};

export default Task;
