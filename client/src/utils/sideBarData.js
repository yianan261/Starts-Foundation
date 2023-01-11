import { FaEdit } from "react-icons/fa";
import { BsFillGearFill, BsFillPeopleFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";

/**
 * exports sidebar data, including title, path, icon, className
 */
export const sidebarData = [
  {
    title: "Home",
    path: "/admin/home",
    icon: <AiFillHome />,
    cName: "sidenav__list-item",
  },
  {
    title: "Manage Admins",
    path: "/admin/manage-admins",
    icon: <BsFillPeopleFill />,
    cName: "sidenav__list-item",
  },
  {
    title: "Account Settings",
    path: "/admin/settings",
    icon: <BsFillGearFill />,
    cName: "sidenav__list-item",
  },
  {
    title: "Edit Content",
    path: "/admin/edit-content",
    icon: <FaEdit />,
    cName: "sidenav__list-item",
  },
];
