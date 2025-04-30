export type Node = {
  id: string;
  selected: boolean;
  type: "form";
  position: {
    x: number;
    y: number;
  };
  measured: {
    width: number;
    height: number;
  };

  data: {
    approval_required: boolean;
  };
};

export type Form = {
  id: string;
  name: string;
};

export type Edge = {
  source: string;
  target: string;
  id: string;
};
