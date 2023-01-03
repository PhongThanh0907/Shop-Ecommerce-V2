import Banner01 from "../assets/banner01.png";
import Banner02 from "../assets/banner02.png";
import Banner03 from "../assets/banner03.png";
import Banner04 from "../assets/banner04.png";
import Lenovo from "../assets/lenovo.jpg";
import Intel from "../assets/intel.jpg";
import Acer from "../assets/acer.jpg";
import Ajazz from "../assets/ajazz.jpg";
import Msi from "../assets/msi.jpg";
import Logo from "../assets/Logo-IQUNIX.png";

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
  { title: "Promotion", link: "/event" },
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

export const listBrand = [Lenovo, Msi, Intel, Acer, Logo, Ajazz];

export const listFooter = [
  {
    title: "Information", label: [
      "Warranty, Returns", "Payment Guide", "Terms of use", "Confidentiality Agreement", "Operational Regulations"
    ]
  }, 
  {title: "Support", label: [
    "Introduce", "Contact information", "Q&A", "Tech news"
  ]},
  {title: "Category", label: [
    "Accessory", "Mouse", "Furniture", "Keyboard", "PC Components"
  ]}
];

export const listMenuWizard = [
  {title: "Home", link: "/"},
  {title: "Promotion", link: "/"},
  {title: "Best Seller", link: "/"},
  {title: "Home", link: "/"},
]