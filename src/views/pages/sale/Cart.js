import React, { useState, useEffect } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [vatPercentage, setVatPercentage] = useState(15);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = () => {
    const existingIndex = cart.findIndex(
      (item) => item.product === selectedProduct
    );
    if (existingIndex !== -1) {
      const existingItem = cart[existingIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + quantity,
        price: existingItem.price + price,
      };
      const newCart = [...cart];
      newCart[existingIndex] = updatedItem;
      setCart(newCart);
    } else {
      const item = {
        product: selectedProduct,
        quantity: quantity,
        price: price,
        discount: discountAmount,
      };
      setCart([...cart, item]);
    }
    setSelectedProduct("");
    setQuantity(1);
    setPrice(0);
    setDiscountAmount(0);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const calculateVat = () => {
    return cart.reduce(
      (total, item) =>
        total + item.quantity * item.price * (vatPercentage / 100),
      0
    );
  };

  const calculateTotal = () => {
    return (
      cart.reduce((total, item) => total + item.quantity * item.price, 0) -
      discountAmount
    );
  };

  const handleVatChange = (e) => {
    setVatPercentage(Number(e.target.value));
  };

  return (
    <div>
      <label htmlFor="product">Product:</label>
      <select
        id="product"
        value={selectedProduct}
        onChange={(e) => setSelectedProduct(e.target.value)}
      >
        <option value="">-- Select a product --</option>
        <option value="product1">Product 1</option>
        <option value="product2">Product 2</option>
        <option value="product3">Product 3</option>
      </select>
      <br />
      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        id="quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <br />
      <label htmlFor="price">Price:</label>
      <input
        type="number"
        id="price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <br />
      <button onClick={addToCart} disabled={!selectedProduct}>
        Add
      </button>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>

            <th>Subtotal</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.product}</td>
              <td>{item.quantity}</td>

              <td>{item.discount}</td>
              <td>
                $
                {(item.quantity * item.price - (item.discount || 0)).toFixed(2)}
              </td>
              <td>
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4">Subtotal:</td>
            <td>${calculateTotal().toFixed(2)}</td>
            <td></td>
          </tr>
          <tr>
            <td colSpan="4">Discount:</td>
            <td>${discountAmount.toFixed(2)}</td>
            <td></td>
          </tr>
          <tr>
            <td colSpan="4">
              VAT
              <input
              style={{width:"30px",height:"25px"}}
                type="text"
                id="vat"
                value={vatPercentage}
                onChange={handleVatChange}
              />
              % :
            </td>
            <label htmlFor="vatAmount">VAT Amount:</label>
            <input
              type="number"
              id="vatAmount"
              value={calculateVat().toFixed(2)}
              readOnly
            />
          </tr>
          <tr>
            <label htmlFor="totalAmount">Total Amount:</label>
            <input
              type="number"
              id="totalAmount"
              value={(calculateTotal() + calculateVat()).toFixed(2)}
              readOnly
            />
          </tr>
        </tfoot>
      </table>
      <label htmlFor="discountAmount">Discount Amount:</label>
      <input
        type="number"
        id="discountAmount"
        value={discountAmount}
        onChange={(e) => setDiscountAmount(Number(e.target.value))}
      />
      <br />
      <br />
      <label htmlFor="vat">VAT Percentage:</label>
      <input
        type="number"
        id="vat"
        value={vatPercentage}
        onChange={handleVatChange}
      />
    </div>
  );
};

export default Cart;
