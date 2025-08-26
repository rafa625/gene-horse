import FamilyTree from "@balkangraph/familytree.js";
import { maleNodeMin } from "./elements/maleNode"; // Importando o node masculino
import { femaleNodeMin } from "./elements/femaleNode"; // Importando o node feminino
import { field0Min } from "./elements/field0";

export const minMaxTemplate = () => {
  const baseTemplate = FamilyTree.templates.tommy;

  baseTemplate.min = {
    ...baseTemplate,
    size: [250, 40],
    img_0: "",
    field_0: field0Min,
    field_1: "",
  };

  FamilyTree.templates.tommy.min = baseTemplate.min;

  FamilyTree.templates.tommy_male.min = {
    ...baseTemplate.min,
    node: maleNodeMin,
  };

  FamilyTree.templates.tommy_female.min = {
    ...baseTemplate.min,
    node: femaleNodeMin,
  };

  FamilyTree.templates.tommy_female.field_0 = field0Min;
  FamilyTree.templates.tommy_male.field_0 = field0Min;
};

export const minMaxToggle = (sender: any, args: any) => {
  args.node.min ? sender.maximize(args.node.id) : sender.minimize(args.node.id);
  return false;
};
