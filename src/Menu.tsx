import { useReducer } from "react";
import { MenuItem } from "./MenuItem";
import { MenuProps, MenuStateType } from "./menuConfigType";
import { menuReducer } from "./menuReducer";
import { MenuActionType } from "./MenuActionType";

export const Menu = ({ menuConfig }: MenuProps) => {
  const initialState: MenuStateType = menuConfig.map((menuItem) => {
    return {
      menuName: menuItem.title.toLowerCase(),
      isOpen: false,
    };
  });

  const [menuState, dispatch] = useReducer(menuReducer, initialState);

  return (
    <div>
      {menuConfig.map((item) => {
        const isOpen =
          menuState.find((i) => i.menuName === item.title.toLowerCase())
            ?.isOpen ?? false;

        return (
          <MenuItem
            item={item}
            isOpen={isOpen}
            toggleState={() => {
              dispatch({
                type: MenuActionType.TOGGLE,
                payload: item.title.toLowerCase(),
              });
            }}
          />
        );
      })}
    </div>
  );
};
