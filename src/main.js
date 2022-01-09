import pic1 from "./pics/1.jpg";
import pic2 from "./pics/2.jpg";
import pic3 from "./pics/3.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCoins } from "./actions";
import './main.css'
import { PriceLisitng } from "./priceLisitng";
export const Main = () => {
  const dispatch = useDispatch();
  const fetch = async () => {
    const res = await axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .catch((err) => {
        console.log(err);
      });
    dispatch(getCoins(res.data));
  };

  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
    <section id="sction" >
      <p id="exp">
        Diffrent Experience With Avinex
      </p>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={pic1} class="d-block w-50 mx-auto my-5" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={pic2} class="d-block w-50 mx-auto my-5" alt="" />
          </div>
          <div class="carousel-item">
            <img src={pic3} class="d-block w-50 mx-auto my-5" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </section>
      <PriceLisitng />
    </>
  );
};
