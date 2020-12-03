import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import "./PriceIndexes.css";
import BTCimg from "../assets/BTC.png";
import BNBimg from "../assets/BNB.png";
import ETHimg from "../assets/ETH.png";

function PricesIndexes(props) {
  props = {
    item: {
      cmid: 1,
    },
  };

  return (
    <div className="price-indexes">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th colSpan="2">Money</th>
            <th>Current</th>
            <th>Opening</th>
            <th>Lowest</th>
            <th>Highest</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={BTCimg} alt="btc" />
            </td>

            <td>
              <Link to={`/crypto/${props.item.cmid}`}>Bitcoin</Link>
            </td>

            <td>$ 19,398</td>
            <td>$ 18,916</td>
            <td>$ 19,396</td>
            <td>$ 18,747</td>
          </tr>

          <tr>
            <td>
              <img src={BNBimg} alt="bnb" />
            </td>
            <td>BNB</td>
            <td>$ 30.70</td>
            <td>$ 30.27</td>
            <td>$ 29.89</td>
            <td>$ 30.83</td>
          </tr>
          <tr>
            <td>
              <img src={ETHimg} alt="eth" />
            </td>
            <td>Ethereum</td>
            <td>$ 613</td>
            <td>$ 591</td>
            <td>$ 584</td>
            <td>$ 616</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default PricesIndexes;
