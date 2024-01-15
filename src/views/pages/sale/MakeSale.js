import React, { useEffect, useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import {TextareaAutosize} from "@mui/base/TextareaAutosize";
import PrintIcon from "@mui/icons-material/Print";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { Config } from "../../../model/config";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBRow,
  MDBInput,
  MDBCol, // MDBBtn,
  MDBIcon,
  MDBTypography,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";

export default function MakeSale() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // ChatGPT code starts here
  const [cart, setCart] = useState([]);

  const [vatPercentage, setVatPercentage] = useState(15);

  const [customer, setCustomer] = useState("");
  const [medicine, setMedicine] = useState("");
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  const [discountAmount, setDiscountAmount] = useState();
  // const [vat, setVat] = useState();
  const [remark, setRemark] = useState("");
  const [paidamount, setPaidAmount] = useState(0);
  const [saleid, setSaleID] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    let sale = {
      customer_id: customer,
      sale_total: grandTotal(), // Set the sale_total to the calculated total
      paid_amount: paidamount,
      discount: discountAmount,
      vat: calculatedVat(), // Set the vat to the calculated vat amount
      remark: remark,
    };

    fetch(`${Config.baseUrlCI}/sales`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(sale).toString(),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    let saleDetails;

    {
      cart.map(
        (item) =>
          (saleDetails = {
            sale_id: saleid,
            medicine_id: item.medicine,
            price: item.price,
            qty: item.quantity,
            discount: discountAmount,
          })
      );
    }
    console.log(saleDetails);

    fetch(`${Config.baseUrlCI}/sales-details`, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(saleDetails).toString(),
    })
      .then((respons) => respons.json())
      .then((details) => console.log(details))
      .then((error) => console.error(error));
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    console.log("a:" + storedCart);

    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  

  const addToCart = () => {
    if (!medicine || !price || !quantity) {
      // If medicine, price, or quantity is empty, display an error message or perform desired action
      return;
    }
  
    const existingIndex = cart.findIndex((item) => item.medicine === medicine);
    if (existingIndex !== -1) {
      const existingItem = cart[existingIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + quantity,
      };
      const newCart = [...cart];
      newCart[existingIndex] = updatedItem;
      setCart(newCart);
    } else {
      const item = {
        medicine: medicine,
        quantity: quantity,
        price: price,
        discount: discountAmount,
      };
      setCart([...cart, item]);
    }
    setMedicine("");
    setQuantity(1);
    setPrice(0);
    setDiscountAmount(0);
  };
  


  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const calculatedVat = () => {
    return cart.reduce(
      (total, item) =>
        total + item.quantity * item.price * (vatPercentage / 100),
      0
    );
  };

  const subTotal = () => {
    return (
      cart.reduce((total, item) => total + item.quantity * item.price, 0) -
      discountAmount
    );
  };


  const grandTotal = () => {
    const total = (subTotal() + calculatedVat()).toFixed(2);
    return total;
  };


  const handleVatChange = (e) => {
    setVatPercentage(Number(e.target.value));
  };
  // ChatGPT code ends here

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [customers, getCustomer] = useState([]);
  const [medicines, getMedicine] = useState([]);

  useEffect(() => {
    fetchCustomers();
    fetchMedicines();
  }, []);

  function fetchCustomers() {
    fetch(`${Config.baseUrlCI}/customers`)
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        console.log(result);
        getCustomer(result);
        console.log(customers);
      })
      .catch((err) => {
        setError(err);
      });
  }

  function fetchMedicines() {
    fetch(`${Config.baseUrlCI}/medicines`)
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        console.log(result);
        getMedicine(result);
        console.log(medicines);
      })
      .catch((err) => {
        setError(err);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <MDBContainer className="py-0">
        <MDBCard className="p-4">
          <MDBCardBody>
            <MDBContainer className="mb-2 mt-3">
              <MDBRow className="d-flex align-items-baseline">
                <MDBCol xl="9">
                  <p style={{ color: "#7e8d9f", fontSize: "20px" }}>
                    Sale <strong>ID:2</strong>
                  </p>
                </MDBCol>
                <MDBCol xl="3" className="float-end">
                  <Button
                    style={{
                      backgroundColor: "lightgray",
                      border: "none",
                      padding: "5px",
                      borderRadius: "5px",
                      marginLeft: "30px",
                    }}
                  >
                    <PrintIcon style={{ color: "green" }} />
                    Print
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "lightgray",
                      border: "none",
                      padding: "5px",
                      borderRadius: "5px",
                      marginLeft: "10px",
                    }}
                  >
                    <PictureAsPdfIcon style={{ color: "red" }} />
                    Export
                  </Button>
                  <hr />
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            <MDBContainer>
              <MDBCol md="12" className="text-center">
                <MDBIcon
                  fab
                  icon="mdb"
                  size="4x"
                  className="ms-0 "
                  style={{ color: "#5d9fc5" }}
                />
                <p className="pt-0">
                  <b>Customer:</b>{" "}
                  <span style={{ color: "#5d9fc5" }}>
                    <select
                      style={{ width: "150px", height: "25px" }}
                      onChange={(e) => setCustomer(e.target.value)}
                    >
                      <option value="">Select Customer</option>
                      {customers.map((customer) => (
                        <option key={customer.id} value={customer.id}>
                          {customer.name}
                        </option>
                      ))}
                    </select>
                  </span>
                </p>
              </MDBCol>
            </MDBContainer>
            <MDBRow>
              <MDBCol xl="8">
                <MDBTypography listUnStyled>
                  From
                  <address>
                    <strong>
                      <LocalHospitalIcon
                        style={{ color: "red", marginRight: "10px" }}
                      />
                      Pharmacy
                    </strong>
                    <br />
                    House:80, Road:7
                    <br />
                    Panthapath
                    <br />
                    Mobile: 01682554025
                    <br />
                    Email: store@gmail.com
                  </address>
                </MDBTypography>
              </MDBCol>
              <MDBCol xl="4">
                <MDBTypography style={{ marginLeft: "100px" }} listUnStyled>
                  <p>
                    <b>Sale</b>
                  </p>
                  <li>
                    <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
                    <span className="fw-bold ms-1">
                      Sale ID:
                      <input
                        style={{
                          width: "70px",
                          height: "30px",
                          textAlign: "center",
                          borderRadius: "5px",
                          border: "1px solid",
                        }}
                        type="number"
                        id="sale_id"
                        // value={quantity}
                        onChange={(e) => setSaleID(Number(e.target.value))}
                      />
                    </span>
                  </li>
                  <li>
                    <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
                    <span className="fw-bold ms-1">Date: </span>
                    {currentDate}
                  </li>
                  <li>
                    <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
                    <span className="fw-bold ms-1">Status:</span>
                    <span className="badge bg-warning text-black fw-bold ms-1">
                      Unpaid
                    </span>
                  </li>
                </MDBTypography>
              </MDBCol>
            </MDBRow>
            <MDBRow className="my-2 mx-1 justify-content-center">
              <MDBTable striped borderless>
                <MDBTableHead
                  className="text-black"
                  style={{ backgroundColor: "#84B0CA" }}
                >
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Medicine</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">SubTotal</th>
                    <th scope="col">Action</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  <tr>
                    <td scope="row">
                      <b>::</b>
                    </td>
                    <td>
                      <select
                        style={{
                          width: "170px",
                          height: "30px",
                          borderRadius: "5px",
                        }}
                        id="medicine"
                        // value={medicine}
                        onChange={(e) => setMedicine(e.target.value)}
                      >
                        <option value="">Select a Medicine</option>
                        {medicines.map((medicine) => (
                          <option key={medicine.id} value={medicine.id}>
                            {medicine.name}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <input
                        style={{
                          width: "70px",
                          height: "30px",
                          textAlign: "center",
                          borderRadius: "5px",
                          border: "1px solid",
                        }}
                        type="number"
                        id="quantity"
                        // value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                      />
                    </td>
                    <td>
                      <input
                        style={{
                          width: "90px",
                          height: "30px",
                          textAlign: "center",
                          borderRadius: "5px",
                          border: "1px solid",
                        }}
                        type="number"
                        id="price"
                        // value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                      />
                    </td>
                    <td>
                      <input
                        style={{
                          width: "90px",
                          height: "30px",
                          textAlign: "center",
                          borderRadius: "5px",
                          border: "1px solid",
                        }}
                        type="number"
                        id="discount"
                        value={quantity * price}
                        readOnly
                      />
                    </td>
                    <td>
                      <button
                        onClick={addToCart}
                        disabled={!medicine}
                        style={{
                          borderRadius: "5px",
                          textAlign: "center",
                          border: "1px solid",
                          width: "75px",
                        }}
                      >
                        Add
                      </button>
                    </td>
                  </tr>
                  {cart.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        {
                          medicines.find(
                            (medicine) => medicine.id === item.medicine
                          )?.name
                        }
                      </td>
                      <td>{item.quantity}</td>
                      <td>{item.price.toFixed(2)}</td>
                      <td>
                        {(
                          item.quantity * item.price -
                          (item.discount || 0)
                        ).toFixed(2)}
                      </td>
                      <td>
                        <button
                          onClick={() => removeFromCart(index)}
                          style={{
                            borderRadius: "5px",
                            textAlign: "center",
                            border: "1px solid",
                            width: "75px",
                          }}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </MDBTableBody>
              </MDBTable>
            </MDBRow>
            <MDBRow>
              <MDBCol xl="8">
                <TextareaAutosize
                  onChange={(e) => setRemark(e.target.value)}
                  aria-label="minimum height"
                  minRows={2}
                  placeholder="Remark"
                  style={{ width: 200, borderRadius: "5px" }}
                />
              </MDBCol>
              <MDBCol xl="3">
                <MDBTypography listUnStyled>
                  <li className="text-black ms-3">
                    <span class="text-black me-4">SubTotal</span>
                    {subTotal().toFixed(2)}
                  </li>
                  <li className="text-black ms-3 mt-2">
                    <span class="text-black me-4">
                      {" "}
                      VAT
                      <input
                        style={{ width: "30px", height: "25px" }}
                        type="text"
                        id="vat"
                        value={vatPercentage}
                        onChange={handleVatChange}
                      />
                      %
                    </span>
                    <span>
                      <input
                        style={{ width: "55px", height: "25px" }}
                        type="text"
                        id="vat"
                        value={calculatedVat().toFixed(2)}
                      />
                    </span>
                  </li>
                  <li className="text-black ms-3 mt-2">
                    <span class="text-black me-4">
                      {" "}
                      <label htmlFor="discountAmount">Discount</label>
                      <input
                        style={{
                          width: "70px",
                          height: "25px",
                          marginLeft: "20px",
                        }}
                        type="text" // Changed the type to "text"
                        id="discountAmount"
                        value={discountAmount}
                        onChange={(e) => {
                          const newValue = e.target.value;
                          if (/^\d*\.?\d*$/.test(newValue)) {
                            // Validate numeric input including decimals
                            setDiscountAmount(newValue);
                          }
                        }}
                      />
                    </span>
                  </li>
                </MDBTypography>
                <p className="text-black float-start">
                  <span className="text-black me-3"> Total Amount</span>
                  <span style={{ fontSize: "20px" }}>
                    {grandTotal()}
                  </span>
                </p>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol xl="10">
                <p>Thank you for your purchase</p>
              </MDBCol>
              <MDBCol xl="2">
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "lightgray",
                    border: "1px solid gray",
                    padding: "5px",
                    borderRadius: "5px",
                    marginLeft: "0px",
                  }}
                >
                  Confirm Sale
                </Button>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </form>
  );
}
