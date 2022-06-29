import { useState } from "react";
import Dish from "./Dish";

const data = [
  {
    item: "Noodles",
    cost: "30Rs",
    qty: 1,
    id: 1
  },
  {
    item: "Biryani",
    cost: "90Rs",
    qty: 2,
    id: 2
  },
  {
    item: "Chips",
    cost: "10Rs",
    qty: 3,
    id: 3
  }
];
const Restaurant = () => {
  const [items, setItem] = useState(data);

  const CalculateTotal = (items) => {
    return items.reduce((acc, c) => acc + parseInt(c.cost) * c.qty, 0);
  };

  const updateObj = (upObj) => {
    let newArr = [];
    items.map((item) => {
      if (item.id === upObj.id) {
        newArr.push(upObj);
        console.log(newArr);
      } else {
        newArr.push(item);
      }
      return setItem(newArr);
    });
  };
  return (
    <div>
      {items.map((item) => (
        <Dish updateObj={updateObj} key={item.id} item={item}></Dish>
      ))}
      <div>Total: {CalculateTotal(items)}</div>
    </div>
  );
};

export default Restaurant;
