import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CryptoInfo.css";

function CryptoInfo() {
  const [data, setData] = useState({ name: "Bitcoin" });

  let { cmid } = useParams();

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACK_API_URL + `/api/cryptos/${cmid}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(function (res) {
        //handle error
        console.log("Error : " + res);
      });
  });

  return (
    <div className="crypto-info">
      <h2>{data.name} info</h2>
      <p>Là il faut afficher les infos sur la crypto en question</p>
    </div>
  );
}

export default CryptoInfo;
