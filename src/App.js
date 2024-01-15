import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./views/layout/layout";
import Dashboard from "./views/pages/dashboard/Dashboard";
import NoPage from "./views/pages/nopage";

import AddCustomer from "./views/pages/customer/AddCustomer";
import ManageCustomer from "./views/pages/customer/ManageCustomer";
import EditCustomer from "./views/pages/customer/EditCustomer";

import AddEmployee from "./views/pages/employee/AddEmployee";
import ManageEmployee from "./views/pages/employee/ManageEmployee";
import EditEmployee from "./views/pages/employee/EditEmployee";

import AddMFG from "./views/pages/manufacturer/AddMFG";
import ManageMFG from "./views/pages/manufacturer/ManageMFG";
import EditMFG from "./views/pages/manufacturer/EditMFG";

import AddMedicine from "./views/pages/medicine/AddMedicine";
import ManageMedicine from "./views/pages/medicine/ManageMedicine";
import EditMedicine from "./views/pages/medicine/EditMedicine";

import AddMedicineType from "./views/pages/medicine-type/AddMedicineType";
import ManageMedicineType from "./views/pages/medicine-type/ManageMedicineType";
import EditMedicineType from "./views/pages/medicine-type/EditMedicineType";

import AddMedicineUnit from "./views/pages/medicine-unit/AddMedicineUnit";
import ManageMedicineUnit from "./views/pages/medicine-unit/ManageMedicineUnit";
import EditMedicineUnit from "./views/pages/medicine-unit/EditMedicineUnit";

import AddPosition from "./views/pages/position/AddPosition";
import ManagePosition from "./views/pages/position/ManagePosition";
import EditPosition from "./views/pages/position/EditPosition";

import AddStatus from "./views/pages/status/AddStatus";
import ManageStatus from "./views/pages/status/ManageStatus";
import EditStatus from "./views/pages/status/EditStatus";

import AddUser from "./views/pages/user/AddUser";
import ManageUser from "./views/pages/user/ManageUser";
import EditUser from "./views/pages/user/EditUser";

import MakeSale from "./views/pages/sale/MakeSale";
import ManageSale from "./views/pages/sale/ManageSales";




import Invoice from "./views/pages/sale/Invoice";
import MakeOrder from "./views/pages/sale/MakeOrder";
import Cart from "./views/pages/sale/Cart";
import CreateOrder from "./views/pages/sale/CreateOrder";



// import Login from "./views/pages/login/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Dashboard />} /> */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoPage />} />

          <Route path="add-customer" element={<AddCustomer />} />
          <Route path="manage-customer" element={<ManageCustomer />} />
          <Route path="edit-customer/:id" element={<EditCustomer />} />

          <Route path="add-employee" element={<AddEmployee />} />
          <Route path="manage-employee" element={<ManageEmployee />} />
          <Route path="edit-employee/:id" element={<EditEmployee />} />

          <Route path="add-mfg" element={<AddMFG />} />
          <Route path="manage-mfg" element={<ManageMFG />} />
          <Route path="edit-mfg/:id" element={<EditMFG />} />

          <Route path="add-medicine" element={<AddMedicine />} />
          <Route path="manage-medicine" element={<ManageMedicine />} />
          <Route path="edit-medicine/:id" element={<EditMedicine />} />

          <Route path="add-medicine-type" element={<AddMedicineType />} />
          <Route path="manage-medicine-type" element={<ManageMedicineType />} />
          <Route path="edit-medicine-type/:id" element={<EditMedicineType />} />

          <Route path="add-medicine-unit" element={<AddMedicineUnit />} />
          <Route path="manage-medicine-unit" element={<ManageMedicineUnit />} />
          <Route path="edit-medicine-unit/:id" element={<EditMedicineUnit />} />

          <Route path="add-position" element={<AddPosition />} />
          <Route path="manage-position" element={<ManagePosition />} />
          <Route path="edit-position/:id" element={<EditPosition />} />

          <Route path="add-status" element={<AddStatus />} />
          <Route path="manage-status" element={<ManageStatus />} />
          <Route path="edit-status/:id" element={<EditStatus />} />

          <Route path="add-user" element={<AddUser/>}/>
          <Route path="manage-user" element={<ManageUser/>}/>
          <Route path="edit-user/:id" element={<EditUser/>}/>

          <Route path="make-sale" element={<MakeSale />} />
          <Route path="manage-sale" element={<ManageSale/>}/>



          <Route path="invoice" element={<Invoice />} />
          <Route path="make-order" element={<MakeOrder />} />
          <Route path="cart" element={<Cart />} />
          <Route path="create-order" element={<CreateOrder/>}/>

          {/* <Route path="login" element={<Login />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
