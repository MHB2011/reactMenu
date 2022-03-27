import { menuConfigType } from "./menuConfigType";

export function getInitialState(menuConfig: menuConfigType) {
  return menuConfig.map((menuItem) => {
    return {
      menuName: menuItem.title.toLowerCase(),
      isOpen: false,
    };
  });
}
