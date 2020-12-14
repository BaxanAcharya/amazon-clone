import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, imageUrl }) {
  const [, dispatch] = useStateValue();

  const addTobasekt = () => {
    dispatch({
      type: "ADD_T0_BASKET",
      item: {
        id: id,
        title: title,
        imageUrl: imageUrl,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <strong>
                <p>*</p>
              </strong>
            ))}
        </div>
      </div>

      <img src={imageUrl} alt="Product" />
      <button onClick={addTobasekt}>Add To cart</button>
    </div>
  );
}

export default Product;
