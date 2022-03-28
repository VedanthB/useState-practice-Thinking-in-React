/* 
### Q10

## ex7: add to cart

- Show a list of items with `add to cart` button
- Clicking on the button should add that item to cart.
- Show the cart below with items added.
- Clicking on the same item twice should add more items in cart.
- **CHALLENGE :** increase the count of the item in cart without adding it to
list.

*/

import { useState } from "react";

const items = [
  {
    name: "watch",
    price: 1000,
    id: 1,
    qty: 1
  },
  {
    name: "cap",
    price: 13000,
    id: 2,
    qty: 1
  },
  {
    name: "pen",
    price: 2000,
    id: 3,
    qty: 1
  },
  {
    name: "car",
    price: 10000,
    id: 4,
    qty: 1
  }
];

export default function AddToCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    let result = cart.find((i) => i.id === item.id);

    if (result) {
      result.qty = result.qty + 1;
      setCart([...cart]);
    } else {
      setCart([...cart, item]);
    }

    console.log(cart);
  };

  return (
    <div>
      <h3>
        {cart.map((item) => (
          <div className="p-5 m-5" key={item.id}>
            <h6>Item: {item.name}</h6>
            <h6>Item Count: {item.qty}</h6>
            <h6>Price: {item.price}</h6>
          </div>
        ))}
      </h3>

      <div></div>

      <ul>
        {items.map((item) => (
          <li
            onClick={() => addToCart(item)}
            className="cursor-pointer m-5"
            key={item.id}
          >
            <h5> {item.name} </h5>
            <h6> {item.price} </h6>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
