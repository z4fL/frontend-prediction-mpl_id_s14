import React from "react";

const GridHeroes = ({heroes}) => {
  return (
    <div className="grid grid-cols-6 gap-6 place-items-center text-center font-league-gothic text-2xl overflow-y-scroll no-scrollbar">
      {heroes.map((value) => (
        <div>
          <img src={`${value.icon}`} className="w-16 h-16 cursor-pointer" />
          <div className="">{value.name}</div>
        </div>
      ))}
    </div>
  );
};

export default GridHeroes;
