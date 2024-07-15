import React from "react";

import { FaCartShopping } from "react-icons/fa6";
import Button from "../button/Button";
import styles from "./Card.module.scss";

const Card = ({ product }) => {
  return (
    <div>
      <img src={product.image_url} alt={product.product_name} />
      <h4>{product.name}</h4>
      <p>{product.description}</p>

      <div className={styles.colors}>
        {product.color_options.map((color, index) => (
          <div
            key={index}
            style={{
              background: color,
            }}
            className={styles.color}
          ></div>
        ))}
      </div>

      <strong>{product.price}</strong>
      <div>
        <Button>
          <FaCartShopping />
          <span style={{ marginLeft: "0.8em" }}>Add to Cart</span>
        </Button>
      </div>
    </div>
  );
};

export default Card;
