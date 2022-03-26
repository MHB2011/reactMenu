import "./App.css";
import { Menu } from "./Menu";
import { menuConfigType } from "./menuConfigType";

function App() {
  const menuConfig: menuConfigType = [
    { title: "Home" },
    { title: "Services", subItems: ["Cooking", "Cleaning"] },
    { title: "Contact", subItems: ["Phone", "Mail"] },
  ];

  return <Menu menuConfig={menuConfig} />;
}

export default App;
