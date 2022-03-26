import { MenuItemProps } from "./menuConfigType";

export const MenuItem = ({ item, isOpen, toggleState }: MenuItemProps) => {
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
