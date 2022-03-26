import { useState } from "react";
import { MenuItem } from "./MenuItem";
import { MenuProps, MenuStateType } from "./menuConfigType";

export const Menu = ({ menuConfig }: MenuProps) => {
  const initialState: MenuStateType = menuConfig.map((menuItem) => {
    return {
      menuName: menuItem.title.toLowerCase(),
      isOpen: false,
    };
  });
  const [menuState, setMenuState] = useState<MenuStateType>(initialState);

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
              setMenuState((prev) => {
                return prev.map((i) =>
                  i.menuName === item.title.toLowerCase()
                    ? { ...i, isOpen: !i.isOpen }
                    : { ...i, isOpen: false }
                );
              });
            }}
          />
        );
      })}
    </div>
  );
};
