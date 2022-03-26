import { useState } from "react";
import "./App.css";

type menuConfigType = { title: string; subItems?: string[] }[];

function App() {
  const menuConfig: menuConfigType = [
    { title: "Home" },
    { title: "Services", subItems: ["Cooking", "Cleaning"] },
    { title: "Contact", subItems: ["Phone", "Mail"] },
  ];

  return <Menu menuConfig={menuConfig} />;
}

type MenuStateType = { menuName: string; isOpen: boolean }[];

interface MenuItemProps {
  item: {
    title: string;
    subItems?: string[] | undefined;
  };
  isOpen: boolean;
  toggleState: () => any;
}

const MenuItem = ({ item, isOpen, toggleState }: MenuItemProps) => {
  return (
    <>
      <p>{item.title}</p>
      {item.subItems?.length && (
        <>
          <button onClick={toggleState}>{isOpen ? "Hide" : "Expand"}</button>
          {isOpen && (
            <ul>
              {item.subItems.map((subitem) => {
                return <li>{subitem}</li>;
              })}
            </ul>
          )}
        </>
      )}
    </>
  );
};

interface MenuProps {
  menuConfig: menuConfigType;
}

const Menu = ({ menuConfig }: MenuProps) => {
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

export default App;
