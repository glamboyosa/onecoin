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
                  <td>{el.ADACAD.altname}</td>
                  <td>{el.ADACAD.fee_volume_currency}</td>
                  <td>{el.ADACAD.margin_call}</td>
                  <td>{el.ADACAD.margin_stop}</td>
                  {el.ADACAD.fees.slice(0, 3).map(el => (
                    <td>{el.join(" ")}</td>
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
