import React from "react";
import positions from "../data/positions";
import dataHero from "../data/heroes";

const TeamSection = ({ color, heroes, side, removeHero, win }) => {
  return (
    <div
      className={`${side === win || win === "" ? color : "bg-gray-700"}`}
      side={side}
    >
      <div
        className={`grid grid-cols-5 justify-start font-bebas-neue text-2xl text-[#fdfdfd] text-center ${
          side === "blue" ? "pr-16" : "pl-16"
        }`}
      >
        {positions.map((value, index) => {
          const hero = heroes[index];
          const heroData = hero ? dataHero.find((h) => h.name === hero) : null;

          return (
            <div
              key={`${value.name + side}`}
              side-data={`${value.name + "-" + side}`}
              onClick={() => removeHero(side, index)}
            >
              <div className="w-full h-[187px] bg-gray-900 flex justify-center items-center">
                {heroData ? (
                  <img src={`${heroData.portrait}`} className="w-full h-auto" />
                ) : (
                  <img src={`${value.icon}`} className="w-8 h-8" />
                )}
              </div>
              <div className={`py-2 ${side === win || win === "" ? "text-slate-950" : "text-slate-300"}`}>
                {heroData ? heroData.name : value.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamSection;
