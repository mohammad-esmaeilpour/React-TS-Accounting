export type TSidebar = {
  searchPlaceholder: string;
  navItems: {
    title: string;
    icon: string;
    url?: string;
    role?: string;
    dropdown?: {
      title: string;
      url: string;
      role?: string;
    }[];
  }[];
  dateTitle: string;
};

export type TLayout = {
  header: {
    title: string;
    membership: string;
    logout: string;
  };
  sidebar: TSidebar;
};
