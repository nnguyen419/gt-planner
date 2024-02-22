import React, { useState } from "react";
import PlayGround from "../components/PlayGround";
import PlanNamePopUp from "../components/PlanNamePopUp";
import { PlusCircle } from "lucide-react";

const Home = () => {
  const [majorSelected, setMajorSelected] = useState(false);
  const [projectName, setProjectName] = useState(false);

  return !majorSelected || !projectName ? (
    <div className="flex gap-4 flex-col justify-center items-center h-full text-5xl">
      <div className="my-10 font-bold">
        <p className="bg-gradient-to-r from-yellow-400 to-black text-transparent bg-clip-text">
          Craft Your Academic Adventure
        </p>
      </div>
      <div className="flex gap-2">
        <select className="select select-bordered w-full max-w-xs">
          <option>Major</option>
          <option>Computer Science</option>
        </select>
        <select className="select select-bordered w-full max-w-xs">
          <option>Thread</option>
          <option>Media</option>
        </select>
        <select className="select select-bordered w-full max-w-xs">
          <option>Thread</option>
          <option>Intelligence</option>
        </select>
      </div>
      <div>
        <button
          className="btn"
          onClick={() => {
            setMajorSelected(true);
            document.getElementById("plan-name").showModal();
          }}
        >
          Create New Plan <PlusCircle />
        </button>
        <PlanNamePopUp setProjectName={setProjectName} />
      </div>
    </div>
  ) : (
    <PlayGround projectName={projectName} initialNodes={[]} initialEdges={[]} />
  );
};

export default Home;
