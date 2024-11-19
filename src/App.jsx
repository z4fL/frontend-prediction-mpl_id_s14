import GridHeroes from "./components/GridHeroes";
import RoleSection from "./components/RoleSection";
import TeamSection from "./components/TeamSection";
import Versus from "./components/Versus";
import heroes from "./data/heroes";

export default function App() {
  const team1Heroes = heroes.slice(0, 5);
  const team2Heroes = heroes.slice(5, 10);

  return (
    <div className="flex justify-center min-h-screen bg-slate-950">
      <div className="max-w-7xl max-h-screen w-full h-full bg-[#fdfdfd] overflow-y-hidden">
        <div className="relative">
          <div className="grid grid-cols-2">
            <TeamSection
              side={"blue"}
              color={"bg-[#39B5FF]"}
              heroes={team1Heroes}
            />
            <TeamSection
              side={"red"}
              color={"bg-[#FF5958]"}
              heroes={team2Heroes}
            />
          </div>
          <Versus />
        </div>
        <div className="relative w-full max-w-4xl mx-auto py-3">
          <RoleSection />
          <div className="h-[23rem] pb-3">
            <GridHeroes heroes={heroes} />
          </div>
        </div>
      </div>
    </div>
  );
}
