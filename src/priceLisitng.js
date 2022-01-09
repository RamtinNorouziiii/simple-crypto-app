import { useSelector } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import "./pricingList.css";
export const PriceLisitng = () => {
  const lists = useSelector((state) => state.allcoins.coins);
  const renderList = lists.map((article) => {
    const { name, current_price, image, price_change_24h, id } = article;

    return (
      <>
        <tr>
          <td>
            <Link to={`/coin/${id}`}>
              {" "}
              <img width="45px" src={image} />
            </Link>
          </td>
          <td>
            <Link to={`/coin/${id}`} id="dd">
              {name}
            </Link>
          </td>
          <td>{current_price} $</td>
          <td
            style={{
              color: Math.sign(price_change_24h) === -1 ? "red" : "#008000",
            }}
          >
            {price_change_24h}
          </td>
        </tr>
      </>
    );
  });
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Coin Pic</th>
            <th scope="col">Name</th>
            <th scope="col">Current Price</th>
            <th scope="col">Changes</th>
          </tr>
        </thead>
        <tbody>{renderList}</tbody>
      </table>
    </>
  );
};
