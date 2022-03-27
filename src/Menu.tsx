import { useReducer } from "react";
import { MenuItem } from "./MenuItem";
import { MenuProps } from "./menuConfigType";
import { menuReducer } from "./menuReducer";
import { MenuActionType } from "./MenuActionType";
import { getInitialState } from "./getInitialState";
import { isSubmenuOpen } from "./isSubmenuOpen";

export const Menu = ({ menuConfig }: MenuProps) => {
  const initialState = getInitialState(menuConfig);
  const [menuState, dispatch] = useReducer(menuReducer, initialState);

  return (
    <div>
      {menuConfig.map((item) => {
        const menuItemTitle = item.title.toLowerCase();
        const isOpen = isSubmenuOpen({ menuState, menuItemTitle });

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
