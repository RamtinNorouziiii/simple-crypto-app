import { useSelector } from "react-redux";

export const Finish = () => {
  const done = useSelector((state) => state.quantity.price);
  const donee = useSelector((state) => state.components);

  return (
    <>
      <section style={{ backgroundColor: "#6ab04c" }}>
        <h1>CONGRATULATION !!!!!</h1>
        <hr />
        <br />
        <br />
        <img src={donee.image.large} />
        <h1>
          {" "}
          You Bought
          <span style={{ color: "red" }}>
            {done === undefined ? donee.market_data.current_price.usd : done}
          </span>{" "}
          From <span style={{ color: "blue" }}>{donee.id}</span>
        </h1>
      </section>
    </>
  );
};
