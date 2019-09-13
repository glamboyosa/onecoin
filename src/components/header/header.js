import { Link } from "gatsby"
import React from "react"
import classes from "./header.module.css"
const Header = () => (
  <header>
    <nav>
      <ul className={classes.mainNav}>
        <p>onecoin</p>

        <li>
          <Link className={classes.home} to="/assetpairs">
            Tradable Asset Pairs
          </Link>
        </li>
        <li>
          <Link className={classes.home} to="/assets">
            Assets
          </Link>
        </li>
        <li>
          <Link className={classes.home} to="/about">
            Help! What's this?
          </Link>
        </li>
        <li>
          <Link className={classes.home} to="/">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
