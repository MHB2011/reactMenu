export type menuConfigType = { title: string; subItems?: string[] }[];

export type MenuStateType = { menuName: string; isOpen: boolean }[];

export interface MenuItemProps {
  item: {
    title: string;
    subItems?: string[] | undefined;
  };
  isOpen: boolean;
  toggleState: () => any;
}

export interface MenuProps {
  menuConfig: menuConfigType;
}
