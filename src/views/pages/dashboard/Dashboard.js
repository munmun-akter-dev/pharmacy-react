// import "./dashboard.css";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowUp";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

// import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// // import { CircularProgressbar } from "react-circular-progressbar";

// const Dashboard = () => {

//   return (
//     <>
//       <div className="row">
//         <div style={{color:"red"}} className="widget">
//           <div className="left">
//             <span style={{color:"red"}}  className="title">CUSTOMERS</span>
//             <span className="counter">35</span>
//             <span className="link">See More...</span>
//           </div>
//           <div className="right">
//             <div className="percentage positive">
//               <KeyboardArrowUpIcon />
//               17
//             </div>
//             <PersonOutlinedIcon
//               className="icon"
//               style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.2)" }}
//             />
//           </div>
//         </div>

//         <div style={{color:"#0096FF"}} className="widget">
//           <div className="left">
//             <span style={{color:"#0096FF"}} className="title">STOCK</span>
//             <span className="counter">70</span>
//             <span className="link">See More...</span>
//           </div>
//           <div className="right">
//             <div className="percentage positive">
//               <KeyboardArrowUpIcon />
//               20%
//             </div>
//             <ShoppingCartOutlinedIcon
//               className="icon"
//               style={{
//                 color: "blue",
//                 backgroundColor: "rgba(88, 150, 243, 0.5)",
//               }}
//             />
//           </div>
//         </div>

//         <div style={{color:"green"}} className="widget">
//           <div className="left">
//             <span style={{color:"green"}} className="title">EARNINGS</span>
//             <span className="counter">25000</span>
//             <span className="link">See More...</span>
//           </div>
//           <div className="right">
//             <div className="percentage positive">
//               <KeyboardArrowUpIcon />
//               20%
//             </div>
//             <MonetizationOnOutlinedIcon
//               className="icon"
//               style={{
//                 color: "green",
//                 backgroundColor: "rgba(0, 128, 0, 0.2)",
//               }}
//             />
//           </div>
//         </div>

//         <div style={{color:"#BF40BF"}} className="widget">
//           <div className="left">
//             <span style={{color:"#BF40BF"}} className="title">BALANCE</span>
//             <span className="counter">50000</span>
//             <span className="link">See More...</span>
//           </div>
//           <div className="right">
//             <div className="percentage positive">
//               <KeyboardArrowUpIcon />
//               20%
//             </div>
//             <AccountBalanceWalletOutlinedIcon
//               className="icon"
//               style={{
//                 color: "purple",
//                 backgroundColor: "rgba(128, 0, 128, 0.2)",
//               }}
//             />
//           </div>
//         </div>
//       </div>

//       <div className="row2">
//         <div style={{backgroundColor:"lightcyan"}} className="featured">
//           <div  className="top">
//             <h1 className="f-title">Total Revenue</h1>
//             <MoreVertIcon fontSize="small" />
//           </div>
//           <div className="bottom">
//             <div className="featuredChart">
//               {/* <CircularProgressbar value={70} text={"70%"} strokeWidth={5} /> */}
//             </div>
//             <p className="g-title">Total sales made today</p>
//             <p className="amount">15000</p>
//             <p className="desc">
//               Previous transactions processing. Last payments may not be
//               included.
//             </p>
//             <div className="summary">

//             </div>
//           </div>
//         </div>

//         <div style={{backgroundColor:"#D8BFD8"}} className="featured">
//           <div className="top">
//             <h1 className="f-title">Total Expenditure</h1>
//             <MoreVertIcon fontSize="small" />
//           </div>
//           <div className="bottom">
//             <div className="featuredChart">
//               {/* <CircularProgressbar value={70} text={"70%"} strokeWidth={5} /> */}
//             </div>
//             <p className="g-title">Total Expenditure</p>
//             <p className="amount">9000</p>
//             <p className="desc">
//               Previous transactions processing. Last payments may not be
//               included.
//             </p>
//             <div className="summary">
//             </div>
//           </div>
//         </div>

//         <div style={{backgroundColor:"#E6E6FA"}} className="featured">
//           <div className="top">
//             <h1 className="f-title">Total Due</h1>
//             <MoreVertIcon fontSize="small" />
//           </div>
//           <div className="bottom">
//             <div className="featuredChart">
//               {/* <CircularProgressbar value={70} text={"70%"} strokeWidth={5} /> */}
//             </div>
//             <p className="g-title">Total Due</p>
//             <p className="amount">27000</p>
//             <p className="desc">
//               Previous transactions processing. Last payments may not be
//               included.
//             </p>
//             <div className="summary">
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;

import React from "react";
import "./dashboard.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Dashboard = () => {
  return (
    <div className="animated fadeIn">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="card revenue-card">
            <div className="card-body">
              <div className="stat-widget-five">
                <div className="stat-icon dib flat-color-1">
                  <i className="pe-7s-cash"></i>
                </div>
                <div className="stat-content">
                  <div className="text-left dib">
                    <div className="stat-text white-text">
                      $<span className="count">23569</span>
                    </div>
                    <div className="stat-heading white-text">Revenue</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="card sales-card">
            <div className="card-body">
              <div className="stat-widget-five">
                <div className="stat-icon dib flat-color-2">
                  <i className="pe-7s-cart"></i>
                </div>
                <div className="stat-content">
                  <div className="text-left dib">
                    <div className="stat-text white-text">
                      $<span className="count">23569</span>
                    </div>
                    <div className="stat-heading white-text">Revenue</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="card products-card">
            <div className="card-body">
              <div className="stat-widget-five">
                <div className="stat-icon dib flat-color-3">
                  <i className="pe-7s-browser"></i>
                </div>
                <div className="stat-content">
                  <div className="text-left dib">
                    <div className="stat-text">
                      <span className="count">349</span>
                    </div>
                    <div className="stat-heading">Products</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="card clients-card">
            <div className="card-body">
              <div className="stat-widget-five">
                <div className="stat-icon dib flat-color-4">
                  <i className="pe-7s-users"></i>
                </div>
                <div className="stat-content">
                  <div className="text-left dib">
                    <div className="stat-text white-text">
                      $<span className="count">23569</span>
                    </div>
                    <div className="stat-heading white-text">Revenue</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              <h4 className="box-title">Revenue Overview</h4>
            </div>
            <div className="card-body--">
              <div className="table-stats order-table ov-h">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="serial">#</th>
                      <th className="avatar">Avatar</th>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="serial">1.</td>
                      <td className="avatar">
                        <div className="round-img">
                          <a href="#">
                            <img
                              className="rounded-circle"
                              src="images/avatar/1.jpg"
                              alt="avatar"
                            />
                          </a>
                        </div>
                      </td>
                      <td>#5469</td>
                      <td>
                        <span className="name">Louis Stanley</span>
                      </td>
                      <td>
                        <span className="product">iMax</span>
                      </td>
                      <td>
                        <span className="count">231</span>
                      </td>
                      <td>
                        <span className="badge badge-complete">Complete</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="serial">2.</td>
                      <td className="avatar">
                        <div className="round-img">
                          <a href="#">
                            <img
                              className="rounded-circle"
                              src="images/avatar/2.jpg"
                              alt="avatar"
                            />
                          </a>
                        </div>
                      </td>
                      <td>#7684</td>
                      <td>
                        <span className="name">Emily Johnson</span>
                      </td>
                      <td>
                        <span className="product">iPro</span>
                      </td>
                      <td>
                        <span className="count">178</span>
                      </td>
                      <td>
                        <span className="badge badge-complete">Complete</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="serial">2.</td>
                      <td className="avatar">
                        <div className="round-img">
                          <a href="#">
                            <img
                              className="rounded-circle"
                              src="images/avatar/2.jpg"
                              alt="avatar"
                            />
                          </a>
                        </div>
                      </td>
                      <td>#7684</td>
                      <td>
                        <span className="name">Emily Johnson</span>
                      </td>
                      <td>
                        <span className="product">iPro</span>
                      </td>
                      <td>
                        <span className="count">178</span>
                      </td>
                      <td>
                        <span className="badge badge-complete">Complete</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="serial">2.</td>
                      <td className="avatar">
                        <div className="round-img">
                          <a href="#">
                            <img
                              className="rounded-circle"
                              src="images/avatar/2.jpg"
                              alt="avatar"
                            />
                          </a>
                        </div>
                      </td>
                      <td>#7684</td>
                      <td>
                        <span className="name">Emily Johnson</span>
                      </td>
                      <td>
                        <span className="product">iPro</span>
                      </td>
                      <td>
                        <span className="count">178</span>
                      </td>
                      <td>
                        <span className="badge badge-complete">Complete</span>
                      </td>
                    </tr>
                    {/* Add more table rows here */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h4 className="box-title">Top Products</h4>
            </div>
            <div className="card-body--">
              <div className="table-stats order-table">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="serial">#</th>
                      <th className="avatar">Avatar</th>
                      <th>Product</th>
                      <th>Popularity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="serial">1.</td>
                      <td className="avatar">
                        <div className="round-img">
                          <a href="#">
                            <img
                              className="rounded-circle"
                              src="images/avatar/1.jpg"
                              alt="avatar"
                            />
                          </a>
                        </div>
                      </td>
                      <td>
                        <span className="name">iMax</span>
                      </td>
                      <td>
                        <span className="product">231</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="serial">2.</td>
                      <td className="avatar">
                        <div className="round-img">
                          <a href="#">
                            <img
                              className="rounded-circle"
                              src="images/avatar/2.jpg"
                              alt="avatar"
                            />
                          </a>
                        </div>
                      </td>
                      <td>
                        <span className="name">iPro</span>
                      </td>
                      <td>
                        <span className="product">178</span>
                      </td>
                    </tr>
                    {/* Add more table rows here */}
                    <tr>
                      <td className="serial">3.</td>
                      <td className="avatar">
                        <div className="round-img">
                          <a href="#">
                            <img
                              className="rounded-circle"
                              src="images/avatar/3.jpg"
                              alt="avatar"
                            />
                          </a>
                        </div>
                      </td>
                      <td>
                        <span className="name">iLite</span>
                      </td>
                      <td>
                        <span className="product">152</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="serial">4.</td>
                      <td className="avatar">
                        <div className="round-img">
                          <a href="#">
                            <img
                              className="rounded-circle"
                              src="images/avatar/4.jpg"
                              alt="avatar"
                            />
                          </a>
                        </div>
                      </td>
                      <td>
                        <span className="name">iPlus</span>
                      </td>
                      <td>
                        <span className="product">142</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
