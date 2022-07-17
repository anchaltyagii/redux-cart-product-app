import React from "react";
import Item from "./item";
import "./index.scss";

const data = [
  {
    id: 1,
    name: "Book",
    description: "Science Book",
    price: "100",
  },
  {
    id: 2,
    name: "Glass",
    description: "Science Book",
    price: "200",
  },
];

const Index = () => {
 

  // const countHandler = () => {
  //   console.log("add to clicked");
  //   dispatch(
  //     cartActions.addItemToCart({
  //       id,
  //       name,
  //       price,
  //     })
  //   );
  // };

  return (
    <div className="item-main-div">
      <h1>Products</h1>
      <div className="item-div">
        {data.map((data, key) => {
          return (
            <Item
              id={data.id}
              name={data.name}
              price={data.price}
              description={data.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Index;
