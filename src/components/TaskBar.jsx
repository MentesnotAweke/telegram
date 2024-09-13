// components/TaskBar.jsx
import React from "react";
import { GoHome } from "react-icons/go";
import { BiTask } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const TaskBar = () => {
  return (
    <div className="bg-black w-screen h-screen">
      <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl flex justify-around items-center z-50 text-xs">
        <div className="text-center text-gray-200 w-1/5 m-1 p-2 rounded-2xl">
          <GoHome className="w-8 h-8 mx-auto" />
          <p>Home</p>
        </div>
        <div className="text-center text-gray-200 w-1/5 m-1 p-2 rounded-2xl">
          <BiTask className="w-7 h-7 mx-auto" />
          <p>Task</p>
        </div>
        <div className="text-center text-gray-200 w-1/5 m-1 p-2 rounded-2xl">
          <LiaUserFriendsSolid className="w-8 h-8 mx-auto" />
          <Link to="/friends"></Link>
          <span>Friends</span>
        </div>
        <div className="text-center text-gray-200 w-1/5 m-1 p-2 rounded-2xl">
          <CiWallet className="w-8 h-8 mx-auto" />
          <span>Wallet</span>
        </div>
      </div>
    </div>
  );
};

export default TaskBar;
