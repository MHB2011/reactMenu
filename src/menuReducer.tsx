import { MenuActionType } from "./MenuActionType";
import { MenuStateType } from "./menuConfigType";

export interface MenuAction {
  type: MenuActionType;
  payload: string;
}

export function menuReducer(state: MenuStateType, action: MenuAction) {
  switch (action.type) {
    case MenuActionType.TOGGLE:
      return state.map((menuItem) => {
        if (menuItem.menuName === action.payload) {
          return { ...menuItem, isOpen: !menuItem.isOpen };
        } else {
          return { ...menuItem, isOpen: false };
        }
      });
    default:
      return state;
  }
}
