import { MenuStateType } from "./menuConfigType";

export function isSubmenuOpen({
  menuItemTitle,
  menuState,
}: {
  menuState: MenuStateType;
  menuItemTitle: string;
}) {
  return menuState.find((i) => i.menuName === menuItemTitle)?.isOpen ?? false;
}
