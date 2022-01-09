import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCoinBuy } from "./actions";
export const Deal = () => {
    const dispatch = useDispatch()
  const [rnge, setRnge] = useState();
  const [num , setNum] = useState()
  const info = useSelector((state) => state.components);
  const price =info.market_data.current_price.usd;
  const percent = (x, y) => {
    return (x / 100) * y;
  };
  const show = (e) => {
    const x = e.target.value;
    setRnge(x);
  };
  const cal = ()=>{
const x =percent(15,price)
setNum(x)
  }
  const go = ()=>{
      dispatch(getCoinBuy(rnge))
  }
  return (
    <>
          <div class="card" style={{backgroundColor : "#b2bec3"}}>
        <img
          src={info.image === undefined ? "" : info.image.small}
          class="card-img-top w-25 mx-5"
          alt="..."
        />
<div>
<label for="points">
       <span style={{fontWeight : 1000 , color : "red"}}>15% more or 15% less of Main Price :</span>  <h1>{price} </h1>
      </label>
      <input
        type="range"
        id="points"
        name="points"
        min={parseFloat(price - num)}
        max={parseFloat(price + num)}
        step="0.000001"
        onChange={show}
        onMouseEnter={cal}
      ></input>{" "}
      <span style={{ color: "red",fontWeight: 500 }}>{rnge}</span>
      <Link to={`/coin/${info.id}/deal/finish`} >
<button className="btn btn-warning mx-5" onClick={go} >Buy It !!</button></Link>
</div>
        <div class="card-body">
          <h1 style={{ color: "#00b894" }}>{info.name}</h1>
          <h2 class="card-text">
            Current Price :
            <span style={{ color: "#7158e2" }}>
              {info.market_data === undefined
                ? ""
                : info.market_data.current_price.usd}
            </span>
          </h2>
          <h3>Category : {info.categories}</h3>
          <br />
          <br />
          <br />
          <span style={{ backgroundColor: "#fffa65" }}>
            {" "}
            {info.name} Page :{" "}
            <a
              href={
                info.market_data === undefined ? "" : info.links.homepage[0]
              }
            >
              {info.market_data === undefined ? "" : info.links.homepage}
            </a>
          </span>
        </div>
      </div>

    </>
  );
};
