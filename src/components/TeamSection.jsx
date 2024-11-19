import React from "react";

const TeamSection = ({ color, heroes, side }) => {
  return (
    <div className={`${color}`}>
      <div className={`grid grid-cols-5 justify-start font-bebas-neue text-2xl text-[#fdfdfd] text-center ${side === "blue" ? "pr-16" : "pl-16"}`}>
        {heroes.map((value) => (
          <div key={value.name}>
            <img src={`${value.portrait}`} className="w-full h-auto" />
            <div className="py-2">{value.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
