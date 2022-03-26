import { MenuItemProps } from "./menuConfigType";

export const MenuItem = ({ item, isOpen, toggleState }: MenuItemProps) => {
  return (
    <div data-test-id={`first-level-${item.title}`}>
      <p>{item.title}</p>
      {item.subItems?.length && (
        <>
          <button data-test-id={`button-${item.title}`} onClick={toggleState}>
            {isOpen ? "Hide" : "Expand"}
          </button>
          {isOpen && (
            <ul data-test-id={`ul-${item.title}`}>
              {item.subItems.map((subitem) => {
                return (
                  <li data-test-id={`li-${item.title}-${subitem}`}>
                    {subitem}
                  </li>
                );
              })}
            </ul>
          )}
        </>
      )}
    </div>
  );
};
