import Banner01 from "../assets/banner01.png";
import Banner02 from "../assets/banner02.png";
import Banner03 from "../assets/banner03.png";
import Banner04 from "../assets/banner04.png";

export const menuList = [
  { title: "Home", link: "/" },
  {
    title: "Menu",
    link: "/",
    list: [
      { titleMenu: "Laptop", link: "/" },
      { titleMenu: "GraphicsCard", link: "/" },
      { titleMenu: "ComputerScreen", link: "/" },
      { titleMenu: "Keyboard", link: "/" },
    ],
  },
  { title: "News", link: "/" },
  { title: "Hot Deal", link: "/" },
  { title: "Contact", link: "/" },
];

export const listBanner = [Banner03, Banner01, Banner02, Banner04];

export const menuBar = [
  { title: "Promotion", link: "/" },
  { title: "Best Seller", link: "/" },
  { title: "Build Computer", link: "/" },
  {
    title: "GearXShop",
    link: "/",
    list: [
      { titleMenu: "Laptop", link: "/" },
      { titleMenu: "GraphicsCard", link: "/" },
      { titleMenu: "ComputerScreen", link: "/" },
      { titleMenu: "Keyboard", link: "/" },
    ],
  },
];
