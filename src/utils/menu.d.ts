export type MenuItem = {
  name: string;
  price: string | number;
  sizes: string[];
  image: string;
};

export type MenuCategory = {
  category: string;
  items: MenuItem[];
};

export const menu: MenuCategory[];