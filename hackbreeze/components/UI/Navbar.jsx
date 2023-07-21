import React from "react";
import classes from "./Navbar.module.css";
import Link from "next/link";
import { useUser } from "../../hooks/queries";

const Navbar = () => {
  const { data: user, isLoading } = useUser();

  return (
    <nav className={classes.nav}>
      <Link href="/" className={classes.brand}>
        HackBreeze
      </Link>
      <div className={classes.navigation_menu}>
        <ul>
          <div className={classes.nav_item}>
            <Link href="/events" className={classes.nav_link}>
              Events
            </Link>
          </div>

          <li className={classes.nav_item}>
            <Link href="/team" className={classes.nav_link}>
              Teams
            </Link>
          </li>
          <div className={classes.vl}>
            <li className={classes.nav_item}>
              <Link href="/auth/profile" className={classes.nav_link1}>
                {user?.name}
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
