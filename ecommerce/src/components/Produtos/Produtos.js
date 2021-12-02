import React from "react";
import "./Produtos.scss";
import { useStateValue } from "../../StateProvider";


function Product({ id, title, image, price, rating }) {
    // eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer or Add items to the basket
    dispatch({
      type: "Adicionar_ao_carrinho",
      // Payload
      item: {
        id: id,
        title: title,
        image: image,
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
          <small>R$ </small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Adicionar ao Carrinho</button>
    </div>
  );
}

export default Product;
