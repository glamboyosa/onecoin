import React from "react"
import classes from "./about.module.css"
const About = () => {
  return (
    <div>
      <h1 className={classes.h1}>What is all this?</h1>
      <p>
        {" "}
        This is an application that displays bitcoin pricing, tradable asset
        pairs and tradable assets.{" "}
      </p>
      <p>
        a type of digital currency in which a record of transactions is
        maintained and new units of currency are generated by the computational
        solution of mathematical problems, and which operates independently of a
        central bank.
      </p>
      <h3>Keywords</h3>
      <ol>
        <li>
          pair name= the name for the pair being traded e.g btc/usd means
          bitcoin/usd pair
        </li>
        <li>margin call =margin call level</li>
        <li>margin stop = stop-out/liquidation margin level</li>
        <li>volume currency = the volume discount currency</li>
        <li> lot = volume lot size</li>
      </ol>
    </div>
  )
}

export default About