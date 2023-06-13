import { Menu, Switch, Transition } from "@headlessui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NAVBAR_ITEMS, NavbarItem } from "./constants";
export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    document.querySelector("html")?.classList.toggle("dark");
  };

  return (
    <nav className="bg-white relative flex w-full items-center  justify-between p-4  dark:border-default-600 dark:bg-default-900  flex-wrap  ">
      <h1 className="text-xl font-bold text-default-900 dark:text-white">
        XT tournament - Final results
      </h1>
      <Switch.Group as={"div"}>
        <Switch.Label className="mr-4 text-sm font-medium text-default-900 dark:text-white">
          Dark Mode{" "}
          <span className="text-xs ml-1"> {darkMode ? "🌙" : "🌞"}</span>
        </Switch.Label>
        <Switch
          checked={darkMode}
          onChange={handleDarkMode}
          className={`${
            darkMode ? "bg-default-600" : "bg-default-200"
          } relative inline-flex h-6 w-11 mb-1 items-center rounded-full`}>
          <span
            className={`${
              darkMode ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
      </Switch.Group>
    </nav>
  );
};

export default Navbar;
