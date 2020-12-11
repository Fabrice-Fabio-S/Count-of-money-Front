import Table from "react-bootstrap/Table";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { Link } from "react-router-dom";
import "./PriceIndexes.css";
import BTCimg from "../assets/BTC.png";
import BNBimg from "../assets/BNB.png";
import ETHimg from "../assets/ETH.png";
import USTimg from "../assets/UST.png";
import XMRimg from "../assets/XMR.png";
import LTCimg from "../assets/LTC.png";
import { useEffect, useState } from "react";
import axios from "axios";

function PricesIndexes(props) {
  props = {
    item: {
      cmid: 1,
    },
  };

  const [crytoData, setCryptoData] = useState([]);
  const [cryptoIsLoaded, setCryptoIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rateExchange, setRateExchange] = useState(0.825);

  useEffect(() => {
    const getCryptosInfo = async () => {
      setIsLoading(true);
      let params = {
        params: "tBTCUSD,tETHUSD,tUSTUSD,tLTCUSD,tXMRUSD,tBNBUSD",
      };
      await axios
        .post(process.env.REACT_APP_BACK_API_URL + "/api/cryptos", params)
        .then((cryptoInfo) => {
          setCryptoData(cryptoInfo.data.data);
          console.log(cryptoInfo.data.data);
          setCryptoIsLoaded(true);
          setIsLoading(false);
        })
        .catch(() => {
          console.log("Backend Error");
        });
    };
    const getExchangeRates = async () => {
      await axios
        .get("https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR")
        .then((data) => {
          console.log("Change rate €/$ : " + data.data.rates.EUR);
          setRateExchange(data.data.rates.EUR);
        })
        .catch(() => {
          console.log("API ERROR - Set default exchange value to ");
          setRateExchange(0.82);
        });
    };
    getCryptosInfo();
    getExchangeRates();
  }, []);

  const [exchangeValue, setValueChange] = useState("EUR");
  const handleValueChange = (val) => setValueChange(val);
  const exchangeValueIsEUR = () => {
    return exchangeValue === "EUR";
  };

  const getCryptoImg = (name) => {
    switch (name) {
      case "tBTCUSD":
        return BTCimg;
      case "tETHUSD":
        return ETHimg;
      case "tBNBUSD":
        return BNBimg;
      case "tUSTUSD":
        return USTimg;
      case "tXMRUSD":
        return XMRimg;
      case "tLTCUSD":
        return LTCimg;
      default:
        console.log("Image manquante");
    }
  };

  const getCryptoName = (name) => {
    switch (name) {
      case "tBTCUSD":
        return "Bitcoin";
      case "tETHUSD":
        return "Ethereum";
      case "tBNBUSD":
        return "Binance Coin";
      case "tUSTUSD":
        return "Tether";
      case "tXMRUSD":
        return "Monero";
      case "tLTCUSD":
        return "Litecoin";
      default:
        console.log("Image manquante");
    }
  };

  return (
    <div className="price-indexes">
      <div className="float-right">
        <ToggleButtonGroup
          type="radio"
          name="radio"
          value={exchangeValue}
          onChange={handleValueChange}
        >
          <ToggleButton variant="secondary" name="radio" value={"EUR"}>
            €
          </ToggleButton>
          <ToggleButton variant="secondary" name="radio" value={"USD"}>
            $
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th colSpan="2">Money</th>
            <th>Current</th>
            <th>Volume (24H)</th>
            <th>Lowest</th>
            <th>Highest</th>
          </tr>
        </thead>
        <tbody>
          {crytoData.map((crypto, i) => (
            <tr key={i}>
              <td>
                <img src={getCryptoImg(`${crypto.name}`)} alt="eth" />
              </td>
              <td>{getCryptoName(`${crypto.name}`)}</td>
              <td>
                {(
                  parseFloat(crypto.ask, 10) *
                  (exchangeValueIsEUR() ? rateExchange : 1)
                ).toFixed(4)}
              </td>
              <td>{crypto.volume.toFixed(2)}</td>
              <td>
                {(
                  parseFloat(crypto.low, 10) *
                  (exchangeValueIsEUR() ? rateExchange : 1)
                ).toFixed(4)}
              </td>
              <td>
                {(
                  parseFloat(crypto.high, 10) *
                  (exchangeValueIsEUR() ? rateExchange : 1)
                ).toFixed(4)}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default PricesIndexes;
