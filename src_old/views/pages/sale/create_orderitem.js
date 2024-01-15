
const getLocalItmes = () => {
  let data = localStorage.getItem("myData");
  console.log(data);
  if (data) {
    return JSON.parse(localStorage.getItem("myData"));
  } else {
    return [];
  }
};

const CreateOrder = () => {
  const [data, setData] = useState(getLocalItmes());

  const [table_id, setTable_id] = useState("");
  const [paid, setPaid] = useState("");
  const [total, setTotal] = useState("");
  const [price, setPrice] = useState("");
  const [menu_item_id, setMenu_item_id] = useState("");
  const [quantity, setQuantity] = useState("");
  const [order_id, setOrder_id] = useState("");

  // local storage data save

  useEffect(() => {
    localStorage.setItem("myData", JSON.stringify(data));
  }, [data]);

  // data transfire

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(customer_id);
    // console.log(date);
    // console.log(remark);

    let order = {
      table_id: table_id,
      paid: "yes",
      total: total,
    };
    fetch(`${Config.baseUrl}/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(order).toString(),
    })
      .then((respons) => respons.json())
      .then((order) => console.log(order))
      .then((error) => console.error(error));

    let details;

    {
      data.map(
        (item) =>
          (details = {
            order_id: order_id,
            menu_item_id: item.menu_item_id,
            price: item.price,
            quantity: item.quantity,
          })
      );
    }

    console.log(details);

    fetch(`${Config.baseUrl}/orderitems`, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(details).toString(),
    })
      .then((respons) => respons.json())
      .then((details) => console.log(details))

      .then((error) => console.error(error));
    console.log(this.http);
  };

  const handleRemoveFromCart = (index) => {
    const newItems = [...data];
    newItems.splice(index, 1);
    setData(newItems);
    localStorage.setData("myData", JSON.stringify(newItems));
  };

  //for get total
  function updateTotal() {
    setTotal(price * quantity);
  }

  const handleAddToCart = () => {
    setData([...data, { menu_item_id, price, quantity }]);
    setMenu_item_id("");
    setPrice("");
    setQuantity("");
    updateTotal();
  };

  const handleAddRow = () => {
    // Check if the product already exists in the cart
    const existingProduct = data.find((item) => item.product === product);
  
    if (existingProduct) {
      // Update the quantity and price of the existing product
      existingProduct.quantity += 1;
      existingProduct.price += price;
      setData([...data]);
    } else {
      // Add the new product with a new serial number
      const newData = [...data,{ serial: data.length + 1, product, price, quantity: 1 },];
      setData(newData);
    }
    // Reset the form inputs
    setProduct("");
    setPrice("");
  };
  




  return (
    <>
      <div
        style={{
          boxShadow:
            "0 10px 20px rgba(0,0,0,0.19),0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            paddingTop: "50px",
          }}
        >
          <div>
            <span>
              <b>MH Foods</b>
            </span>
            <br />
            <span>Mobile:01518389862</span>
            <br />
            <span>Email:foods@gmail.com</span>
            <br />
            <span>Address:Mirpur-12</span>
            <br />
          </div>

          <div style={{ marginLeft: "20px" }}>
            <FormControl sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="demo-customized-select-native">
                <b>Table</b>
              </InputLabel>
              <Select
                style={{ width: "120px", heigh: "35px" }}
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                onChange={(e) => setTable_id(e.target.value)}
                input={<BootstrapInput />}
              >
                {tables.map((table) => (
                  <MenuItem key={table.id} value={table.id}>
                    {table.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div style={{ display: "flex" }}>
              <div>
                <b>Order ID</b>
              </div>
              <div>
                <input
                  type="text"
                  className="form-control"
                  value={order_id}
                  onChange={(e) => setOrder_id(e.target.value)}
                  style={{ width: "60%", marginLeft: "30px" }}
                  Controlid="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "50px" }}></div>
        <Table striped bordered hover size="sm">
          <thead
            style={{
              backgroundColor: "LightGray",
              textAlign: "center",
              color: "black",
            }}
          >
            <tr>
              <th>SN</th>
              <th>Menu Items</th>
              <th>Price</th>
              <th>Quantity</th>

              <th>
                <Button
                  variant="danger"
                  onClick={() => setShowForm(true)}
                  style={{ backgroundColor: "#805300" }}
                >
                  <b>Show</b>
                </Button>{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {showForm && (
              <tr style={{ backgroundColor: "LightGray" }}>
                <td></td>
                <td>
                  <FormControl sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="demo-customized-select-native"></InputLabel>
                    <Select
                      style={{ width: "120px", heigh: "35px", marginTop: "0" }}
                      labelId="demo-customized-select-label"
                      id="demo-customized-select"
                      onChange={(e) => setMenu_item_id(e.target.value)}
                      input={<BootstrapInput />}
                    >
                      {menus.map((menu) => (
                        <MenuItem key={menu.id} value={menu.id}>
                          {menu.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </td>
                <td>
                  <Form.Control
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </td>
                <td>
                  <Form.Control
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </td>

                <td>
                  <Button variant="light" onClick={handleAddToCart}>
                    <b>+</b>
                  </Button>{" "}
                </td>
              </tr>
            )}
            {data.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.menu_item_id}</td>
                <td>{row.price}</td>
                <td>{row.quantity}</td>

                <td>
                  {" "}
                  <button
                    onClick={() => handleRemoveFromCart(index)}
                    style={{
                      marginLeft: "5%",
                      backgroundColor: "red",
                      border: "none",
                      borderRadius: "20px",
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "60%",
            marginTop: "50px",
          }}
        >
          &nbsp;
          <div>
            <b>Total:</b>
            <span style={{ marginLeft: "100px" }}>{total}</span>
          </div>
        </div>

        <div style={{ display: "flex", width: "100%", padding: "20px" }}>
          <div
            style={{ marginTop: "100px", marginLeft: "60%", float: "right" }}
          >
            <Button
              onClick={handleSubmit}
              variant="success"
              style={{ width: "150px", height: "40px" }}
              active
            >
              Button Procces
            </Button>{" "}
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateOrder;
