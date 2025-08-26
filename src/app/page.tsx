// src/app/page.tsx
"use client"; // Se estiver usando hooks, adicione aqui

import FamilyTreeComponent from "./components/FamilyTree/FamilyTree";
import type { FamilyNode } from "./components/FamilyTree/familyTree.interface";

const data: FamilyNode[] = [
  {
    id: 1,
    pids: [2,3],
    name: "Mare 1",
    gender: "female",
    horseGender: "mare",
    vel: 40,
    spr: 40,
    acl: 40,
    agl: 40,
    slt: 40,
    distance: 1200,
    trackSurface: "HARD",
    position: "FRONT",
  },
  {
    id: 2,
    pids: [1],
    name: "Stallion 1",
    gender: "male",
    horseGender: "stallion",
    vel: 40,
    spr: 40,
    acl: 40,
    agl: 40,
    slt: 40,
    distance: 1600,
    trackSurface: "HARD",
    position: "FRONT",
  },
  {
    id: 3,
    fid: 2,
    mid: 1,
    pids: [1],
    name: "Stallion 2",
    gender: "male",
    horseGender: "stallion",
    vel: 40,
    spr: 40,
    acl: 40,
    agl: 40,
    slt: 40,
    distance: 1600,
    trackSurface: "HARD",
    position: "FRONT",
  },
  
];

export default function HomePage() {
  return (
    <div>
      <div id="tree" />
      <FamilyTreeComponent nodes={data} />
    </div>
  );
}
