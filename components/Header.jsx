import Link from "next/link";

import "../scss/Header.scss";

const Header = props => (
  <Link href="/">
    <div className="Header">{props.appTitle}</div>
  </Link>
);

export default Header;