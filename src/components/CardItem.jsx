import { useState, useEffect } from "react";
import CardIncludeList from "./CardIncludeList";

const CardItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [style, setStyle] = useState("");

  useEffect(() => {
    if (isHovered) {
      setStyle("hover");
    } else {
      setStyle("");
    }
  }, [isHovered]);

  return (
    <div
      className={"card-item " + style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h5 className="card-item-title">{props.title}</h5>
      <div className="card-price">
        <span className="card-price-left">{props.price}</span>
        <span className="card-price-right"> One Time Payment</span>
      </div>
      <div className="card-include ">
        <div className="card-include-title">
          {props.title} New Company formation includes
        </div>
        <CardIncludeList />
      </div>
      <button className="cart-button">Continue</button>
    </div>
  );
};

export default CardItem;
