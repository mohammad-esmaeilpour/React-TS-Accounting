export type TTabs = {
  id: number;
  key: "goods" | "services";
  title: string;
};

export type TCategoryData = {
  tabs: TTabs[];
  addCategoryBtn: string;
  notFound: string;
  category_type: {
    key: "goods" | "services";
    title: string;
  }[];
  go_back: string;
  dropown: {
    notFound: string;
    label: string;
    kind: string;
  };
  create: {
    title: string;
    addCategoryText: string;
    addCategoryBtn: string;
  };
  update: {
    title: string;
  };
};

export type TSingleCategory = {
  id: number;
  title: string;
  created_at: string;
  updated_at: string;
  type: "services" | "goods";
  parent_id: null | number;
  children: null;
  products: null;
  business: number;
};
