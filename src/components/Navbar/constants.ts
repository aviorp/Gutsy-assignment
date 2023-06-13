export type NavbarItem = {
  name: string;
  to: string;
  children?: NavbarItem[];
};

export type NavbarChildItem = {
  name: string;
  to: string;
  title: string;
};

export const NAVBAR_ITEMS = [
  {
    name: "Home",
    to: "/"
  },
  {
    name: "Players",
    to: "/players"
  },
  {
    name: "About",
    to: "/about"
  }
];
