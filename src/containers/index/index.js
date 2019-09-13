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
    kraken: [],
  }
  componentDidMount() {
    axios
      .all([
        axios.get("https://api.coindesk.com/v1/bpi/currentprice.json"),
        axios.get(
          "https://cors-anywhere.herokuapp.com/https://api.kraken.com/0/public/Assets"
        ),
      ])
      .then(
        axios.spread((coinDeskRes, krakenRes) => {
          // do something with both responses
          console.log(coinDeskRes.data)
          console.log(krakenRes.data.result)
          const array = []
          this.setState({
            loading: false,
            euro: array.concat(coinDeskRes.data.bpi.EUR),
            usd: array.concat(coinDeskRes.data.bpi.USD),
            pounds: array.concat(coinDeskRes.data.bpi.GBP),
            kraken: array.concat(krakenRes.data.result),
          })
        })
      )
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
              <tr key={el.code}>
                <td>{el.code}</td>
                <td>&euro;</td>
                <td>&euro;{el.rate_float.toFixed(2)}</td>
              </tr>
            ))}
            {this.state.usd.map(el => (
              <tr key={el.code}>
                <td>{el.code}</td>
                <td>&#36;</td>
                <td>&#36;{el.rate_float.toFixed(2)}</td>
              </tr>
            ))}
            {this.state.pounds.map(el => (
              <tr key={el.code}>
                <td>{el.code}</td>
                <td>&pound;</td>
                <td>&pound;{`${el.rate_float.toFixed(2)}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 style={{ color: "#fff" }}>Tradable Assets</h2>
        <table style={{ marginTop: "20px" }}>
          <tbody>
            <tr>
              <th>Asset Class</th>
              <th>Asset</th>
              <th>Decimal Percentage</th>
            </tr>
            {this.state.kraken.map(el => {
              return (
                <tr key={el.ATOM.altname}>
                  <td>{el.ATOM.aclass}</td>
                  <td>{el.ATOM.altname}</td>
                  {el.ATOM.display_decimals < 5 ? (
                    <td
                      style={{ color: "red" }}
                    >{`${el.ATOM.display_decimals}%`}</td>
                  ) : (
                    <td style={{ color: "green" }}>
                      {`${el.ATOM.display_decimals}%`}
                    </td>
                  )}
                </tr>
              )
            })}
            {this.state.kraken.map(el => {
              return (
                <tr key={el.BAT.altname}>
                  <td>{el.BAT.aclass}</td>
                  <td>{el.BAT.altname}</td>
                  {el.BAT.display_decimals < 5 ? (
                    <td
                      style={{ color: "red" }}
                    >{`${el.BAT.display_decimals}%`}</td>
                  ) : (
                    <td style={{ color: "green" }}>
                      {`${el.BAT.display_decimals}%`}
                    </td>
                  )}
                </tr>
              )
            })}
            {this.state.kraken.map(el => {
              return (
                <tr key={el.ADA.altname}>
                  <td>{el.ADA.aclass}</td>
                  <td>{el.ADA.altname}</td>
                  {el.ADA.display_decimals < 5 ? (
                    <td
                      style={{ color: "red" }}
                    >{`${el.ADA.display_decimals}%`}</td>
                  ) : (
                    <td style={{ color: "green" }}>
                      {`${el.ADA.display_decimals}%`}
                    </td>
                  )}
                </tr>
              )
            })}
            {this.state.kraken.map(el => {
              return (
                <tr key={el.BCH.altname}>
                  <td>{el.BCH.aclass}</td>
                  <td>{el.BCH.altname}</td>
                  {el.BCH.display_decimals < 5 ? (
                    <td
                      style={{ color: "red" }}
                    >{`${el.BCH.display_decimals}%`}</td>
                  ) : (
                    <td style={{ color: "green" }}>
                      {`${el.BCH.display_decimals}%`}
                    </td>
                  )}
                </tr>
              )
            })}
            {this.state.kraken.map(el => {
              return (
                <tr key={el.BSV.altname}>
                  <td>{el.BSV.aclass}</td>
                  <td>{el.BSV.altname}</td>
                  {el.BSV.display_decimals < 5 ? (
                    <td
                      style={{ color: "red" }}
                    >{`${el.BSV.display_decimals}%`}</td>
                  ) : (
                    <td style={{ color: "green" }}>
                      {`${el.BSV.display_decimals}%`}
                    </td>
                  )}
                </tr>
              )
            })}
            {this.state.kraken.map(el => {
              return (
                <tr key={el.DASH.altname}>
                  <td>{el.DASH.aclass}</td>
                  <td>{el.DASH.altname}</td>
                  {el.DASH.display_decimals < 5 ? (
                    <td
                      style={{ color: "red" }}
                    >{`${el.DASH.display_decimals}%`}</td>
                  ) : (
                    <td style={{ color: "green" }}>
                      {`${el.DASH.display_decimals}%`}
                    </td>
                  )}
                </tr>
              )
            })}
            {this.state.kraken.map(el => {
              return (
                <tr key={el.EOS.altname}>
                  <td>{el.EOS.aclass}</td>
                  <td>{el.EOS.altname}</td>
                  {el.EOS.display_decimals < 5 ? (
                    <td
                      style={{ color: "red" }}
                    >{`${el.EOS.display_decimals}%`}</td>
                  ) : (
                    <td style={{ color: "green" }}>
                      {`${el.EOS.display_decimals}%`}
                    </td>
                  )}
                </tr>
              )
            })}
            {this.state.kraken.map(el => {
              return (
                <tr key={el.GNO.altname}>
                  <td>{el.GNO.aclass}</td>
                  <td>{el.GNO.altname}</td>
                  {el.GNO.display_decimals < 5 ? (
                    <td
                      style={{ color: "red" }}
                    >{`${el.GNO.display_decimals}%`}</td>
                  ) : (
                    <td style={{ color: "green" }}>
                      {`${el.GNO.display_decimals}%`}
                    </td>
                  )}
                </tr>
              )
            })}
            {this.state.kraken.map(el => {
              return (
                <tr key={el.ICX.altname}>
                  <td>{el.ICX.aclass}</td>
                  <td>{el.ICX.altname}</td>
                  {el.ICX.display_decimals < 5 ? (
                    <td
                      style={{ color: "red" }}
                    >{`${el.ICX.display_decimals}%`}</td>
                  ) : (
                    <td style={{ color: "green" }}>
                      {`${el.ICX.display_decimals}%`}
                    </td>
                  )}
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
export default Index
