import React, { Component } from "react"
import axios from "axios"
import classes from "../index/index.module.css"
import Spinner from "../../components/Spinner/spinner"
class Assets extends Component {
  state = {
    loading: true,
    kraken: [],
  }
  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.kraken.com/0/public/AssetPairs"
      )
      .then(resp => {
        console.log(resp.data.result)
        const array = []
        this.setState({
          loading: false,
          kraken: array.concat(resp.data.result),
        })
      })
  }
  render() {
    let data = (
      <div className={classes.div}>
        <h2 style={{ color: "#fff" }}>Assets Pairs</h2>
        <table style={{ marginTop: "20px" }}>
          <tbody>
            <tr>
              <th>Pair Name</th>
              <th>Fees Volume</th>
              <th>Margin Call</th>
              <th>Margin Stop</th>

              <th>Fee Percent</th>
            </tr>
            {this.state.kraken.map(el => {
              return (
                <tr key={el.ADACAD.altname}>
                  <td>{el.ADACAD.altname.split("").join("")}</td>
                  <td>{el.ADACAD.fee_volume_currency}</td>
                  <td>{el.ADACAD.margin_call}</td>
                  <td>{el.ADACAD.margin_stop}</td>
                  {el.ADACAD.fees.slice(0, 1).map(el => (
                    <td>{el.join("/ ")}</td>
                  ))}
                </tr>
              )
            })}
            {this.state.kraken.map(el => {
              return (
                <tr key={el.ADAETH.altname}>
                  <td>{el.ADAETH.altname.split("").join("")}</td>
                  <td>{el.ADAETH.fee_volume_currency}</td>
                  <td>{el.ADAETH.margin_call}</td>
                  <td>{el.ADAETH.margin_stop}</td>
                  {el.ADAETH.fees.slice(0, 1).map(el => (
                    <td>{el.join("/ ")}</td>
                  ))}
                </tr>
              )
            })}
            {this.state.kraken.map(el => {
              return (
                <tr key={el.ADAETH.altname}>
                  <td>{el.ADAETH.altname.split("").join("")}</td>
                  <td>{el.ADAETH.fee_volume_currency}</td>
                  <td>{el.ADAETH.margin_call}</td>
                  <td>{el.ADAETH.margin_stop}</td>
                  {el.ADAETH.fees.slice(0, 1).map(el => (
                    <td>{el.join("/ ")}</td>
                  ))}
                </tr>
              )
            })}
            {this.state.kraken.map(el => {
              return (
                <tr key={el.ADAEUR.altname}>
                  <td>{el.ADAEUR.altname.split("").join("")}</td>
                  <td>{el.ADAEUR.fee_volume_currency}</td>
                  <td>{el.ADAEUR.margin_call}</td>
                  <td>{el.ADAEUR.margin_stop}</td>
                  {el.ADAEUR.fees.slice(0, 1).map(el => (
                    <td>{el.join("/ ")}</td>
                  ))}
                </tr>
              )
            })}
            {this.state.kraken.map(el => {
              return (
                <tr key={el.ADAUSD.altname}>
                  <td>{el.ADAUSD.altname.split("").join("")}</td>
                  <td>{el.ADAUSD.fee_volume_currency}</td>
                  <td>{el.ADAUSD.margin_call}</td>
                  <td>{el.ADAUSD.margin_stop}</td>
                  {el.ADAUSD.fees.slice(0, 1).map(el => (
                    <td>{el.join("/ ")}</td>
                  ))}
                </tr>
              )
            })}
            {this.state.kraken.map(el => {
              return (
                <tr key={el.ADAXBT.altname}>
                  <td>{el.ADAXBT.altname.split("").join("")}</td>
                  <td>{el.ADAXBT.fee_volume_currency}</td>
                  <td>{el.ADAXBT.margin_call}</td>
                  <td>{el.ADAXBT.margin_stop}</td>
                  {el.ADAXBT.fees.slice(0, 1).map(el => (
                    <td>{el.join("/ ")}</td>
                  ))}
                </tr>
              )
            })}
            {this.state.kraken.map(el => {
              return (
                <tr key={el.ATOMCAD.altname}>
                  <td>{el.ATOMCAD.altname.split("").join("")}</td>
                  <td>{el.ATOMCAD.fee_volume_currency}</td>
                  <td>{el.ATOMCAD.margin_call}</td>
                  <td>{el.ATOMCAD.margin_stop}</td>
                  {el.ATOMCAD.fees.slice(0, 1).map(el => (
                    <td>{el.join("/ ")}</td>
                  ))}
                </tr>
              )
            })}
            {this.state.kraken.map(el => {
              return (
                <tr key={el.ATOMETH.altname}>
                  <td>{el.ATOMETH.altname.split("").join("")}</td>
                  <td>{el.ATOMETH.fee_volume_currency}</td>
                  <td>{el.ATOMETH.margin_call}</td>
                  <td>{el.ATOMETH.margin_stop}</td>
                  {el.ATOMETH.fees.slice(0, 1).map(el => (
                    <td>{el.join("/ ")}</td>
                  ))}
                </tr>
              )
            })}
            {this.state.kraken.map(el => {
              return (
                <tr key={el.ATOMEUR.altname}>
                  <td>{el.ATOMEUR.altname.split("").join("")}</td>
                  <td>{el.ATOMEUR.fee_volume_currency}</td>
                  <td>{el.ATOMEUR.margin_call}</td>
                  <td>{el.ATOMEUR.margin_stop}</td>
                  {el.ATOMEUR.fees.slice(0, 1).map(el => (
                    <td>{el.join("/ ")}</td>
                  ))}
                </tr>
              )
            })}
            {this.state.kraken.map(el => {
              return (
                <tr key={el.ATOMUSD.altname}>
                  <td>{el.ATOMUSD.altname.split("").join("")}</td>
                  <td>{el.ATOMUSD.fee_volume_currency}</td>
                  <td>{el.ATOMUSD.margin_call}</td>
                  <td>{el.ATOMUSD.margin_stop}</td>
                  {el.ATOMUSD.fees.slice(0, 1).map(el => (
                    <td>{el.join("/ ")}</td>
                  ))}
                </tr>
              )
            })}
            {this.state.kraken.map(el => {
              return (
                <tr key={el.ATOMXBT.altname}>
                  <td>{el.ATOMXBT.altname.split("").join("")}</td>
                  <td>{el.ATOMXBT.fee_volume_currency}</td>
                  <td>{el.ATOMXBT.margin_call}</td>
                  <td>{el.ATOMXBT.margin_stop}</td>
                  {el.ATOMXBT.fees.slice(0, 1).map(el => (
                    <td>{el.join("/ ")}</td>
                  ))}
                </tr>
              )
            })}{" "}
            {this.state.kraken.map(el => {
              return (
                <tr key={el.BATETH.altname}>
                  <td>{el.BATETH.altname.split("").join("")}</td>
                  <td>{el.BATETH.fee_volume_currency}</td>
                  <td>{el.BATETH.margin_call}</td>
                  <td>{el.BATETH.margin_stop}</td>
                  {el.BATETH.fees.slice(0, 1).map(el => (
                    <td>{el.join("/ ")}</td>
                  ))}
                </tr>
              )
            })}
            {this.state.kraken.map(el => {
              return (
                <tr key={el.BATEUR.altname}>
                  <td>{el.BATEUR.altname.split("").join("")}</td>
                  <td>{el.BATEUR.fee_volume_currency}</td>
                  <td>{el.BATEUR.margin_call}</td>
                  <td>{el.BATEUR.margin_stop}</td>
                  {el.BATEUR.fees.slice(0, 1).map(el => (
                    <td>{el.join("/ ")}</td>
                  ))}
                </tr>
              )
            })}
            {this.state.kraken.map(el => {
              return (
                <tr key={el.BATUSD.altname}>
                  <td>{el.BATUSD.altname.split("").join("")}</td>
                  <td>{el.BATUSD.fee_volume_currency}</td>
                  <td>{el.BATUSD.margin_call}</td>
                  <td>{el.BATUSD.margin_stop}</td>
                  {el.BATUSD.fees.slice(0, 1).map(el => (
                    <td>{el.join("/ ")}</td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
    if (this.state.loading) {
      data = <Spinner />
    }
    return data
  }
}
export default Assets
