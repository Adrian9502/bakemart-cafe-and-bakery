export type MenuItem = {
  name: string;
  price: string | number;
};

export type MenuCategory = {
  category: string;
  items: MenuItem[];
};

declare module '../utils/menu' {
  const menu: MenuCategory[];
  export default menu;
}