import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  max-width: 600px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

const InputLabel = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
`;

const Button = styled.button`
  background-color: #0047ab;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
  cursor: pointer;
`;

const ItemList = styled.ul`
  list-style: none;
  margin: 1rem 0;
  padding: 0;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const ItemName = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

const ItemPrice = styled.span`
  font-size: 1.2rem;
`;

function CreateOrderPage() {
  const [order, setOrder] = useState({
    customerName: "",
    items: [],
    total: 0,
  });

  const [item, setItem] = useState({
    name: "",
    price: 0,
    quantity: 1,
  });

  const addItem = () => {
    setOrder({
      ...order,
      items: [...order.items, item],
      total: order.total + item.price * item.quantity,
    });
    setItem({
      name: "",
      price: 0,
      quantity: 1,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({
      ...item,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(order);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Create Order</h1>
      <InputGroup>
        <InputLabel>Customer Name:</InputLabel>
        <Input
          type="text"
          name="customerName"
          value={order.customerName}
          onChange={(e) => setOrder({ ...order, customerName: e.target.value })}
        />
      </InputGroup>
      <InputGroup>
        <InputLabel>Item Name:</InputLabel>
        <Input
          type="text"
          name="name"
          value={item.name}
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <InputLabel>Price:</InputLabel>
        <Input
          type="number"
          name="price"
          value={item.price}
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <InputLabel>Quantity:</InputLabel>
        <Input
          type="number"
          name="quantity"
          value={item.quantity}
          onChange={handleChange}
        />
      </InputGroup>
      <Button type="button" onClick={addItem}>
        Add Item
      </Button>
      <ItemList>
        {order.items.map((item, index) => (
          <Item key={index}>
            <ItemName>{item.name}</ItemName>
            <ItemPrice>${(item.price * item.quantity).toFixed(2)}</ItemPrice>
          </Item>
        ))}
      </ItemList>
      <h2>Total: ${order.total.toFixed(2)}</h2>
      <Button type="submit">Submit Order</Button>
    </Form>
  );
}

export default CreateOrderPage;
