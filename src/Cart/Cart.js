import React from "react";

const Cart = ({ cartElements, removeFromCart }) => {
  return (
    <div>
      <h2>Cart</h2>
      {cartElements.map((item, index) => (
        <div key={index}>
          <img
            src={item.imageUrl}
            alt={item.title}
            style={{
              width: "80px",
              height: "60px",
              marginRight: "10px",
              flexShrink: 0,
            }}
          />
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <h3 style={{ fontSize: "13px" }}>{item.title}</h3>
              <p>${item.price}</p>
              <p>Quantity:{item.quantity}</p>
            </div>

            <div style={{ marginLeft: "20px" }}>
              <input
                type="number"
                min={1}
                value={item.quantity}
                onChange={(e) => console.log("change quantity")}
                style={{ width: "50px", marginRight: "10px" }}
              />

              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
