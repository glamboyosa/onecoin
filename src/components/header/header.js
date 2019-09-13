import { Link } from "gatsby"
import React from "react"
import classes from "./header.module.css"
const Header = () => (
  <header>
    <nav>
      <ul className={classes.mainNav}>
        <Link to="/">
          <p>onecoin</p>{" "}
        </Link>

        <li>
          <Link className={classes.home} to="/assets">
            Tradable Asset Pairs
          </Link>
        </li>

        <li>
          <Link className={classes.home} to="/about">
            Help! What's this?
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
