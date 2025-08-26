export interface FamilyTreeProps {
  nodes: Array<FamilyNode>;
}

export interface FamilyNode {
  id: number;
  pids?: number[];
  mid?: number;
  fid?: number;
  name: string;
  gender: string;
  horseGender: string;
  vel: number;
  spr: number;
  acl: number;
  agl: number;
  slt: number;
  distance: number;
  trackSurface: string;
  position: string;
}

export type FamilyTreeFC = React.FC<FamilyTreeProps>;
