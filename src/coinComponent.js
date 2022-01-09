import axios from "axios";
import { useEffect } from "react";
import "./coinComponent.css";
import { getCoinComponent } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
export const CoinComponent = () => {
  const infos = useSelector((state) => state.components);
  const dispatch = useDispatch();
  const idd = useParams();
  const urlnc = idd.coinId;

  const fetch = async () => {
    const res = await axios
      .get(`https://api.coingecko.com/api/v3/coins/${urlnc}`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(getCoinComponent(res.data));
  };
  useEffect(() => {
    if (idd != "") {
      return fetch();
    }
  }, [idd]);
  return (
    <>
      <div class="card" id="clr">
        <img
          src={infos.image === undefined ? "" : infos.image.small}
          class="card-img-top w-25 mx-5"
          alt="..."
        />

        <div class="card-body">
          <h1 style={{ color: "#ffb8b8" }}>{infos.name}</h1>
          <h2 class="card-text">
            Current Price :
            <span style={{ color: "#7158e2" }}>
              {infos.market_data === undefined
                ? ""
                : infos.market_data.current_price.usd}
            </span>
          </h2>
          <h3>Category : {infos.categories}</h3>
          <br />
          <Link to={`/coin/${infos.id}/deal`} >
          <button className="btn btn-danger">Start Deal</button>
          </Link>
          <br />
          <br />
          <p>
           
            <h1>Description :</h1>{" "}
            {infos.description === undefined ? "IDK" : infos.description.en}{" "}
          </p>
          <span style={{ backgroundColor: "#fffa65" }}>
           
           <span style={{color : "red" , fontWeight : 1000}} > {infos.name} Page : </span>{" "}
            <a
              href={
                infos.market_data === undefined ? "" : infos.links.homepage[0]
              }
            >
              {infos.market_data === undefined ? "" : infos.links.homepage}
            </a>
          </span>
        </div>
      </div>
    </>
  );
};
