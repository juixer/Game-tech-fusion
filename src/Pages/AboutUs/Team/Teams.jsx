import { useEffect, useState } from "react";
import Team from "./team";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch("Team.json")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);
  return (
    <div
      data-aos="flip-up"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <h1 className="text-5xl font-bold">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {teams.map((team, idx) => {
          return <Team key={idx} team={team} />;
        })}
      </div>
    </div>
  );
};

export default Teams;
