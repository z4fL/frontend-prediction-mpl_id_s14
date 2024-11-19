import React from "react";

const RoleSection = () => {
  return (
    <div className="flex justify-center items-center gap-3 font-league-gothic text-3xl text-center pb-2">
      <div className="bg-gray-900 text-gray-50 w-36 py-1 cursor-pointer">
        TANK
      </div>
      <div className="bg-gray-600 text-gray-50 w-36 py-1 cursor-pointer">
        FIGHTER
      </div>
      <div className="bg-gray-600 text-gray-50 w-36 py-1 cursor-pointer">
        ASSASSIN
      </div>
      <div className="bg-gray-600 text-gray-50 w-36 py-1 cursor-pointer">
        MAGE
      </div>
      <div className="bg-gray-600 text-gray-50 w-36 py-1 cursor-pointer">
        MARKSMAN
      </div>
      <div className="bg-gray-600 text-gray-50 w-36 py-1 cursor-pointer">
        SUPPORT
      </div>
    </div>
  );
};

export default RoleSection;
