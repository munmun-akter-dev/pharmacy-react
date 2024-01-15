import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import { Outlet, Link } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import DashboardIcon from "@mui/icons-material/Dashboard";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import ShopIcon from "@mui/icons-material/Shop";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import InventoryIcon from "@mui/icons-material/Inventory";
import PaidIcon from "@mui/icons-material/Paid";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import InputIcon from '@mui/icons-material/Input';

import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const drawerWidth = 245;

function Layout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));
  
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const drawer = (
    <div>
      <Toolbar style={{ backgroundColor: "red" }}>
        <LocalHospitalIcon style={{ color: "white", width: "20px" }} />
        <span style={{ marginLeft: "10px", color: "White", fontSize: "22px" }}>
          Pharmacy
        </span>
      </Toolbar>
      <Divider />

      <Link to="/dashboard" style={{ textDecoration: "none", color: "black" }}>
        <ListItem disablePadding>
          <ListItemButton>
            <DashboardIcon style={{ color: "red" }} />
            &nbsp;&nbsp;
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
      </Link>

      <Accordion
        expanded={expanded === "panel"}
        onChange={handleChange("panel")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panelbh-content"
          id="panelbh-header"
        >
          <Typography>
            <PeopleAltIcon style={{ color: "red" }} />
            &nbsp;&nbsp;Person
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link
              to="/manage-employee"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ArrowRightIcon />
                  <ListItemText primary="Manage Employee" />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link
              to="/manage-customer"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ArrowRightIcon />
                  <ListItemText primary="Manage Customer" />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link
              to="/manage-mfg"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ArrowRightIcon />
                  <ListItemText primary="Manage MFG" />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link
              to="/manage-position"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ArrowRightIcon />
                  <ListItemText primary="Manage Position" />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link
              to="/manage-status"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ArrowRightIcon />
                  <ListItemText primary="Manage Status" />
                </ListItemButton>
              </ListItem>
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>
            <MedicalServicesIcon style={{ color: "red" }} />
            &nbsp;&nbsp;Medicine
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link
              to="/manage-medicine"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ArrowRightIcon />
                  <ListItemText primary="Manage Medicine" />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link
              to="/manage-medicine-type"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ArrowRightIcon />
                  <ListItemText primary="Manage MedicineType" />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link
              to="/manage-medicine-unit"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ArrowRightIcon />
                  <ListItemText primary="Manage MedicineUnit" />
                </ListItemButton>
              </ListItem>
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography>
            <ShopIcon style={{ color: "red" }} />
            &nbsp;&nbsp;Purchase
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ArrowRightIcon />
                  <ListItemText primary="Add Purchase" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ArrowRightIcon />
                  <ListItemText primary="Manage Purchase" />
                </ListItemButton>
              </ListItem>
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography>
            <PointOfSaleIcon style={{ color: "red" }} />
            &nbsp;&nbsp;Sale
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link
              to="/make-sale"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ArrowRightIcon />
                  <ListItemText primary="Make Sale" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/manage-sale" style={{ textDecoration: "none", color: "black" }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ArrowRightIcon />
                  <ListItemText primary="Manage Sale" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link
              to="/invoice"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ArrowRightIcon />
                  <ListItemText primary="Invoice" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link
              to="/cart"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ArrowRightIcon />
                  <ListItemText primary="Cart" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link
              to="/create-order"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ArrowRightIcon />
                  <ListItemText primary="create-order" />
                </ListItemButton>
              </ListItem>
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography>
            <InventoryIcon style={{ color: "red" }} />
            &nbsp;&nbsp;Stock
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ArrowRightIcon />
                  <ListItemText primary="Manage Stock" />
                </ListItemButton>
              </ListItem>
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography>
            <PaidIcon style={{ color: "red" }} />
            &nbsp;&nbsp;Account
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ArrowRightIcon />
                  <ListItemText primary="Manage Account" />
                </ListItemButton>
              </ListItem>
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography>
            <ReceiptIcon style={{ color: "red" }} />
            &nbsp;&nbsp;Report
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ArrowRightIcon />
                  <ListItemText primary="Make Report" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ArrowRightIcon />
                  <ListItemText primary="Manage Report" />
                </ListItemButton>
              </ListItem>
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography>
            <SettingsIcon style={{ color: "red" }} />
            &nbsp;&nbsp;Settings
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link to="/manage-user" style={{ textDecoration: "none", color: "black" }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ArrowRightIcon />
                  <ListItemText primary="Manage User" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ArrowRightIcon />
                  <ListItemText primary="Cloud" />
                </ListItemButton>
              </ListItem>
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
        <ListItem disablePadding>
          <ListItemButton>
            <InputIcon style={{ color: "red" }} />
            &nbsp;&nbsp;
            <ListItemText primary="Login" />
          </ListItemButton>
        </ListItem>
      </Link>

      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <ListItem disablePadding>
          <ListItemButton>
            <PowerSettingsNewIcon style={{ color: "red" }} />
            &nbsp;&nbsp;
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </Link>

    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        style={{ backgroundColor: "red" }}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            ::::::
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Layout;
