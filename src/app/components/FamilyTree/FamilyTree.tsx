// components/FamilyTree.tsx
import React, { useEffect } from "react";
import FamilyTree from "@balkangraph/familytree.js";
import "./FamilyTree.css";
import { familyTreeConfig } from "./familyTree.config";
import { minMaxTemplate, minMaxToggle } from "./minMax";
import { FamilyNode, FamilyTreeFC } from "./familyTree.interface";
import { field3 } from "./elements/field3";

const FamilyTreeComponent: FamilyTreeFC = (props) => {
  
  FamilyTree.templates.tommy_female.field_1 = "{val}";
  FamilyTree.templates.tommy_male.field_1 = "{val}";
  FamilyTree.templates.tommy_female.size = [250, 150];
  FamilyTree.templates.tommy_male.size = [250, 150];

  minMaxTemplate();
  useEffect(() => {
    const notIsWinObject = typeof window !== "object";
    if (notIsWinObject) return;

    const elTree = document.getElementById("tree");
    const notHasElTree = !elTree;

    if (notHasElTree) return;

    const opts = { ...familyTreeConfig, nodes: props.nodes };
    const family = new FamilyTree(elTree, opts);

    family.onField(
      (args: {
        node: FamilyTree.node;
        data: object;
        value: any;
        element: string;
        name: string;
        field: string;
      }) => {
        // Fazendo a assertion do tipo para acessar os valores sem erros
        const horse = args.data as FamilyNode;

        if (args.name === "skills") {
          // Usando os valores de horseData de forma segura
          args.value = `<g transform="translate(0, 40)">
              <text x="17" y="20" style="font-size: 12px; font-weight: 900;" fill="#ffffff">VEL</text>
              <text x="64" y="20" style="font-size: 12px; font-weight: 900;" fill="#ffffff">SPR</text>
              <text x="111" y="20" style="font-size: 12px; font-weight: 900;" fill="#ffffff">ACL</text>
              <text x="158" y="20" style="font-size: 12px; font-weight: 900;" fill="#ffffff">AGL</text>
              <text x="205" y="20" style="font-size: 12px; font-weight: 900;" fill="#ffffff">SLT</text>
    
              <text x="19" y="40" style="font-size: 14px;" fill="#ffffff">${horse.vel}</text>
              <text x="66" y="40" style="font-size: 14px;" fill="#ffffff">${horse.spr}</text>
              <text x="113" y="40" style="font-size: 14px;" fill="#ffffff">${horse.acl}</text>
              <text x="161" y="40" style="font-size: 14px;" fill="#ffffff">${horse.agl}</text>
              <text x="207" y="40" style="font-size: 14px;" fill="#ffffff">${horse.slt}</text>

              <!-- Nova linha com Distance, Track Surface, Position -->
              <text x="17" y="70" style="font-size: 14px; font-weight: 900;" fill="#ffffff">Distance</text>
              <text x="95" y="70" style="font-size: 14px; font-weight: 900;" fill="#ffffff">Surface</text>
              <text x="170" y="70" style="font-size: 14px; font-weight: 900;" fill="#ffffff">Position</text>

              <!-- Valores de Distance, Track Surface, Position -->
              <text x="17" y="90" style="font-size: 14px;" fill="#ffffff">${horse.distance}m</text>
              <text x="95" y="90" style="font-size: 14px;" fill="#ffffff">${horse.trackSurface}</text>
              <text x="170" y="90" style="font-size: 14px;" fill="#ffffff">${horse.position}</text>
            </g>`;
        }
      }
    );
    // family.on("click", minMaxToggle);
  }, [props.nodes]);

  return <div id="tree" style={{ height: "", width: "" }} />;
};

export default FamilyTreeComponent;
