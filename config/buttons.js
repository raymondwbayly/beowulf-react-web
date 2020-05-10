
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faMapMarkerAlt,
  faUser,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";

const navButtons = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <FontAwesomeIcon icon={faCompass} />
  },
  {
    label: "Docs",
    path: "/docs",
    icon: <FontAwesomeIcon icon={faMapMarkerAlt} />
  },
  {
    label: "Wiki",
    path: "/wiki",
    icon: <FontAwesomeIcon icon={faShoppingCart} />
  },
  {
    label: "Profile",
    path: "/profile",
    icon: <FontAwesomeIcon icon={faUser} />
  }
];

export default navButtons;