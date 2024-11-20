import { useState, useEffect } from "react";
import GridHeroes from "./components/GridHeroes";
import RoleSection from "./components/RoleSection";
import TeamSection from "./components/TeamSection";
import MidSection from "./components/MidSection";
import heroes from "./data/heroes";

export default function App() {
  const [datapick, setDatapick] = useState({ blue: [], red: [] });
  const [activeRole, setActiveRole] = useState("");
  const [filteredHeroes, setFilteredHeroes] = useState(heroes);
  const [result, setResult] = useState("");

  const onclickHeroIcon = (name) => {
    setDatapick((prevDatapick) => {
      // Check if the hero is already in either team
      if (prevDatapick.blue.includes(name) || prevDatapick.red.includes(name)) {
        return prevDatapick;
      }

      // Find the first null position in the blue team
      const blueTeam = [...prevDatapick.blue];
      const blueIndex = blueTeam.indexOf(null);
      if (blueIndex !== -1) {
        blueTeam[blueIndex] = name;
      } else if (blueTeam.length < 5) {
        blueTeam.push(name);
      } else {
        // If blue team is full, add to red team
        const redTeam = [...prevDatapick.red];
        const redIndex = redTeam.indexOf(null);
        if (redIndex !== -1) {
          redTeam[redIndex] = name;
        } else if (redTeam.length < 5) {
          redTeam.push(name);
        }
        return { blue: blueTeam, red: redTeam };
      }

      return { blue: blueTeam, red: prevDatapick.red };
    });
  };

  const removeHero = (side, index) => {
    setDatapick((prevDatapick) => {
      const newTeam = [...prevDatapick[side]];
      newTeam[index] = null; // Ganti elemen yang dihapus dengan null

      const newDatapick = { ...prevDatapick, [side]: newTeam };

      // Reset data jika semua hero dihapus
      if (newDatapick[side].every((hero) => hero === null)) {
        newDatapick[side] = [];
      }

      // Reset data jika semua hero di kedua tim dihapus
      if (
        newDatapick.blue.every((hero) => hero === null) &&
        newDatapick.red.every((hero) => hero === null)
      ) {
        return { blue: [], red: [] };
      }

      return newDatapick;
    });
  };

  useEffect(() => {
    const filtered = activeRole
      ? heroes.filter((hero) => hero.role.includes(activeRole))
      : heroes;
    setFilteredHeroes(filtered);
  }, [activeRole]);

  const predict = async () => {
    if (
      datapick.blue.length === 5 &&
      datapick.red.length === 5 &&
      !datapick.blue.includes(null) &&
      !datapick.red.includes(null)
    ) {

      const simulatePrediction = async () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve("BLUE".toLowerCase());
          }, 2000);
        });
      };

      const res = await simulatePrediction();
      setResult(res);
    }
  };

  return (
    <div className="flex justify-center min-h-screen bg-slate-950">
      <div className="max-w-7xl max-h-screen w-full h-full bg-[#fdfdfd] overflow-y-hidden">
        <div className="relative">
          <div
            id="team-section"
            className="grid grid-cols-2 relative z-10 pointer-events-auto"
          >
            <TeamSection
              side={"blue"}
              color={"bg-[#39B5FF]"}
              heroes={datapick.blue}
              removeHero={removeHero}
              win={result}
            />
            <TeamSection
              side={"red"}
              color={"bg-[#FF5958]"}
              heroes={datapick.red}
              removeHero={removeHero}
              win={result}
            />
          </div>
          <MidSection predict={predict} result={result} setResult={setResult} />
        </div>
        <div className="relative w-full max-w-4xl mx-auto py-3">
          <RoleSection active={activeRole} setActive={setActiveRole} />
          <div className="h-[23rem] pb-3">
            <GridHeroes heroes={filteredHeroes} pick={onclickHeroIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}
