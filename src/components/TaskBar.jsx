// components/TaskBar.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { GoHome } from "react-icons/go";
import { BiTask } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";

const TaskBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-xs z-50"> {/* Ensure taskbar is fixed at the bottom */}
      <div className="flex justify-around items-center p-2">
        {/* Home */}
        <Link to="/" className="text-center text-gray-200 w-1/5">
          <GoHome className="w-8 h-8 mx-auto" />
          <p>Home</p>
        </Link>

        {/* Task */}
        <Link to="/task" className="text-center text-gray-200 w-1/5">
          <BiTask className="w-7 h-7 mx-auto" />
          <p>Task</p>
        </Link>

        {/* Friends */}
        <Link to="/friends" className="text-center text-gray-200 w-1/5">
          <FaUserFriends className="w-8 h-8 mx-auto" />
          <p>Friends</p>
        </Link>

        {/* Wallet (You can implement a Wallet page in the future) */}
        <div className="text-center text-gray-200 w-1/5">
          <CiWallet className="w-8 h-8 mx-auto" />
          <p>Wallet</p>
        </div>
      </div>
    </div>
  );
};

export default TaskBar;
