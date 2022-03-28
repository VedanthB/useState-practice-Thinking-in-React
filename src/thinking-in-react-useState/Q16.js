/* 
ex12: like in a list

    Render a list
    Every item in the list should have a like button.

*/

import { useState } from "react";

const List = [
  {
    title: "watch",
    liked: false
  },
  {
    title: "car",
    liked: false
  },
  {
    title: "bike",
    liked: false
  },
  {
    title: "bag",
    liked: false
  }
];

export default function LikeButtonList() {
  const [items, setItems] = useState(List);

  const likeItem = (item) => {
    let likedItem = items.find((i) => i.title === item.title);
    likedItem.liked = !likedItem.liked;
    setItems([...items]);
  };

  return (
    <div>
      <ul className="w-72">
        {items.map((item, i) => (
          <li key={i} className="text-lg p-4 m-1">
            <i
              onClick={() => likeItem(item)}
              className={`btn-icon fas fa-heart ${
                item.liked ? "text-red-500" : "text-grey-500"
              } `}
            ></i>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
