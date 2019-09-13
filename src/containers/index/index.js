import React, { Component } from "react"
import axios from "axios"
import classes from "./index.module.css"
import Spinner from "../../components/Spinner/spinner"
class Index extends Component {
  state = {
    euro: [],
    loading: true,
    usd: [],
    pounds: [],
  }
  componentDidMount() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(resp => {
        const array = []
        this.setState({
          loading: false,
          euro: array.concat(resp.data.bpi.EUR),
          usd: array.concat(resp.data.bpi.USD),
          pounds: array.concat(resp.data.bpi.GBP),
        })
      })
      .catch(error => console.error(error.message))
  }
  render() {
    let data = (
      <div className={classes.div}>
        <h1>Bitcoin Price Index</h1>
        <table>
          <tbody>
            <tr>
              <th>Currency</th>
              <th>Symbol</th>
              <th>Rate</th>
            </tr>

            {this.state.euro.map(el => (
              <tr>
                <td>{el.code}</td>
                <td>&euro;</td>
                <td>&euro;{el.rate_float.toFixed(2)}</td>
              </tr>
            ))}
            {this.state.usd.map(el => (
              <tr>
                <td>{el.code}</td>
                <td>&#36;</td>
                <td>&#36;{el.rate_float.toFixed(2)}</td>
              </tr>
            ))}
            {this.state.pounds.map(el => (
              <tr>
                <td>{el.code}</td>
                <td>&pound;</td>
                <td>&pound;{`${el.rate_float.toFixed(2)}`}</td>
              </tr>
            ))}
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
export default Index
