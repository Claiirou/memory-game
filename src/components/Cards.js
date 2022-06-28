import React, { useState } from "react";
import CardItem from "./CardItem";

export default function Cards() {
  const [items, setItems] = useState(
    [
      { id: 1, img: "/img/belier.jpg", stat: "" },
      { id: 1, img: "/img/belier.jpg", stat: "" },
      { id: 2, img: "/img/capricorne.jpg", stat: "" },
      { id: 2, img: "/img/capricorne.jpg", stat: "" },
      { id: 3, img: "/img/gemeaux.jpg", stat: "" },
      { id: 3, img: "/img/gemeaux.jpg", stat: "" },
      { id: 4, img: "/img/lion.jpg", stat: "" },
      { id: 4, img: "/img/lion.jpg", stat: "" },
      { id: 5, img: "/img/sagittaire.jpg", stat: "" },
      { id: 5, img: "/img/sagittaire.jpg", stat: "" },
      { id: 6, img: "/img/scorpion.jpg", stat: "" },
      { id: 6, img: "/img/scorpion.jpg", stat: "" },
      { id: 7, img: "/img/taureau.jpg", stat: "" },
      { id: 7, img: "/img/taureau.jpg", stat: "" },
      { id: 8, img: "/img/verseau.jpg", stat: "" },
      { id: 8, img: "/img/verseau.jpg", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

  function check(current) {
    if (items[current].id === items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }

  return (
    <div className="container">
      {items.map((item, index) => (
        <CardItem
          key={index}
          item={item}
          id={index}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}
