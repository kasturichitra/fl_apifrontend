import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import icons from "../../../assets/ntar.gif-_VGlxBXr.webp";
import "./userDashboard.css";
import { useDispatch, useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import { Tooltip } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import handleuser from "../../../common/getUserDetails/GetUserDetails";
import { addUser } from "../../../redux/slice/User/userSlice";
import { addWallet } from "../../../redux/slice/wallet/walletSlice";
import useGetWallet from '../../../common/GetWalletdetails/wallet'

const drawerWidth = 300;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: open ? 0 : `-${drawerWidth}px`,
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);
  const [data , setData] = useState({});
  const [showIcons, setShowIcons] = useState(false);
  const [isApiUsageOpen, setIsApiUsageOpen] = useState(false);
  const [isApiDocumentationsOpen, setIsApiDocumentationOpen] = useState(false);
  const [activeDocumentationPage, setActiveDocumentationPage] = useState("");
  const [activeApiPage, setActiveApiPage] = useState("");
  const [activeServicePage, setActiveServicePage] = useState("");
  const [Wallet, setWallet] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const Walletdetails = useSelector((state) => state.wallet.Wallet);
  const fetchWallet = useGetWallet();

  // const data = useSelector((state)=>state.user.user)
  console.log("=====>>>>Data" , data)

  const menuItems = [
    "PanVerification",
    "AadhaarVerification",
    "MobileNumberVerification",
    "ShopEstablishment",
    "GstInverify",
    "CinNumber",
    "FaceMatch",
    "Accountverify",
    "UPIVerification",
    "BinVerify",
  ];
  const menuItemsDocumentations = [
    "PanDocumentation",
    "AadhaarDocumentation",
    "MobileDocumentation",
    "ShopDocumentation",
    "Gst_InDocumentation",
    "CinDocumentation",
    "FaceMatchDocumentation",
    "AccountDocumentation",
    "UPIDocumentation",
    "BinVerifyDocumentation",
  ];
  const productMenu = ["Products", "Templates"];
  const Support = ["My Account", "Whitelist IP", "Video Tutorials", "Logout"];
  const productMenuIcons = ["bi-file-earmark-fill", "bi-filetype-xml"];
  const SupportIcons = [
    "bi-person-fill",
    "bi-shield-lock-fill",
    "bi-play-circle-fill",
    "bi-box-arrow-right",
  ];

  const menuItemsIcons = [
    // "bi bi-grid-fill",
    "bi bi-book",
    "bi bi-phone",
    "bi bi-box-seam",
    "bi bi-people",
    "bi bi-file-arrow-down",
    "bi bi-image-alt",
    "bi bi-calendar",
    "bi-person-check",
    "bi bi-calendar",
    "bi bi-calendar",
  ];

  const servicesMenu = [
    "ServiceTracking",
    "ServiceCharge"
  ]

  const toggleDrawer = () => {
    setOpen(!open);
    setShowIcons(!showIcons);
  };

  const ApisMenu = [
    "APIDocumentation",
    "ApiKeys",
    "APIUsage",
    "TestAPIs",
  ];

  const ApisMenuIcons = [
    "bi-file-earmark-fill",
    "bi-code",
    "bi-opencollective",
    "bi-journal-check",
  ];

  const handleUserDetails = async() => {
    try {
      const response = await handleuser()
      console.log(response);
      if(response?.response?.response?.role == "user"){
        dispatch(addUser(response?.response?.response));
        setData(response?.response?.response)
      } else {
        localStorage.removeItem("token");
        navigate("/login");
      }
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    handleUserDetails()
  },[])

  const handleItemClick = (index, item) => {
    console.log(item);
    setActiveIndex(index === activeIndex ? null : index); // Toggle active index
    if (item == "APIDocumentation") {
      setActiveApiPage("");
      setIsApiDocumentationOpen(!isApiDocumentationsOpen);
    } else if (item === "APIUsage") {
      setActiveDocumentationPage("");
      setIsApiUsageOpen(!isApiUsageOpen); // Toggle dropdown visibility
    } else if (item == "Logout") {
      navigate("/login");
      localStorage.removeItem("token");
    } 
    else {
      setIsApiUsageOpen(false); // Close dropdown when other items are clicked
      setIsApiDocumentationOpen(false);
      setActiveDocumentationPage("");
      setActiveApiPage("");
      navigate(`${item}`);
    }
  };

  // console.log('wallet is --->', Wallet)

  useEffect(() => {
    // handlegetWallet()
    fetchWallet()
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          backgroundColor: "#181C14",
          color: "#fff",
          padding: "8px 16px",
          zIndex: (theme) => theme.zIndex.drawer,
        }}
      >
        {/* Toolbar is Header */}
        <Toolbar>
          <IconButton
            aria-label="toggle drawer"
            onClick={toggleDrawer}
            edge="start"
            sx={{
              mr: 2,
              ...(open && { display: "none" }),
              color: "#FFD65A",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              ...(showIcons
                ? { visibility: "visible" }
                : { visibility: "hidden" }),
            }}
          >
            {/* Dashboard Header Icon */}
            <img
              src={icons}
              alt="icon"
              style={{
                width: "50px",
                height: "50px",
                marginRight: "10px",
              }}
            />
            <span
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#FFD65A",
              }}
            >
              Ntar
            </span>
          </Typography>
          <Typography
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "start",
              color: "#FFD65A",
              fontWeight: "bold",
            }}
          >
            {`WelCome ${data && data?.name ? data?.name : "User"} !`}
          </Typography>
          <div>Wallet: {Walletdetails?.unSettledAmount}</div>
            <Tooltip title="Help" placement="left">
            <IconButton>

              <PhoneIcon fontSize="large" style={{ color: "whitesmoke" }} />
            </IconButton>
            </Tooltip>
            <Tooltip title="Profile" placement="left">
            <IconButton>
            <AccountCircleIcon
              fontSize="large"
              style={{ color: "whitesmoke" }}
              onClick={() => navigate("/dashboard/profile", { state: data })}
            />
          </IconButton>
          </Tooltip>
          <Tooltip title="Logout" placement="left">
          <IconButton>
            <LogoutIcon
              fontSize="large"
              style={{ color: "whitesmoke" }}
              onClick={() => {
                localStorage.clear("token");
                navigate("/");
              }}            />
          </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "#000",
            color: "#FFD65A",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        {/* left side dashboard Icon */}
        <DrawerHeader>
          <div className="d-flex align-items-center">
            <img
              src={icons}
              alt="icon"
              style={{
                width: "50px",
                height: "50px",
                marginRight: "10px",
              }}
            />
            <span
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#FFD65A",
              }}
            >
              Ntar
            </span>
          </div>
          <IconButton onClick={toggleDrawer} sx={{ color: "#FFD65A" }}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider sx={{ borderColor: "#333" }} />
        <b className="ps-3 mt-3">ApisMenu</b>
        <List>
          {ApisMenu.map((text, index) => (
            <React.Fragment key={text}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => handleItemClick(index, text)}
                  sx={{
                    backgroundColor:
                      activeIndex === index ? "#FFD65A" : "transparent",
                    color: activeIndex === index ? "#000" : "#fff",
                    "&:hover": { backgroundColor: "#FFD65A", color: "#000" },
                  }}
                >
                  <ListItemIcon
                    sx={{ color: activeIndex === index ? "#000" : "#fff" }}
                  >
                    <i className={ApisMenuIcons[index]}></i>
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>

              {/* Show menuItems as a dropdown if APIUsage is clicked */}
              {text === "APIUsage" && isApiUsageOpen && (
                <List>
                  {" "}
                  {/* Add padding for indentation */}
                  {menuItems.map((subItem, subIndex) => (
                    <ListItem key={subItem} disablePadding>
                      <ListItemButton
                        onClick={() => {
                          navigate(`${subItem}`);
                          setActiveApiPage(subItem);
                          setActiveDocumentationPage("");
                        }}
                        sx={{
                          backgroundColor:
                            subItem == activeApiPage ? "#FFD65A" : "#333",
                          color: subItem == activeApiPage ? "#000" : "#fff",
                          "&:hover": {
                            backgroundColor: "#FFD65A",
                            color: "#000",
                          },
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            color: subItem == activeApiPage ? "#000" : "#fff",
                          }}
                        >
                          <i className={menuItemsIcons[subIndex]}></i>
                        </ListItemIcon>
                        <ListItemText primary={subItem} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              )}
              {text === "APIDocumentation" && isApiDocumentationsOpen && (
                <List>
                  {" "}
                  {/* Add padding for indentation */}
                  {menuItemsDocumentations.map((subItem, subIndex) => (
                    <ListItem key={subItem} disablePadding>
                      <ListItemButton
                        onClick={() => {
                          navigate(`${subItem}`);
                          setActiveDocumentationPage(subItem);
                          setActiveApiPage("");
                        }}
                        sx={{
                          backgroundColor:
                            subItem == activeDocumentationPage
                              ? "#FFD65A"
                              : "#333",
                          color:
                            subItem == activeDocumentationPage
                              ? "#000"
                              : "#fff",
                          "&:hover": {
                            backgroundColor: "#FFD65A",
                            color: "#000",
                          },
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            color:
                              subItem == activeDocumentationPage
                                ? "#000"
                                : "#fff",
                          }}
                        >
                          <i className={menuItemsIcons[subIndex]}></i>
                        </ListItemIcon>
                        <ListItemText primary={subItem} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              )}
            </React.Fragment>
          ))}
        </List>

        <b className="ps-3 mt-3"> Product Menu</b>
        <List>
          {productMenu.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={() => handleItemClick(index + ApisMenu.length, text)} // Add the length of ApisMenu to continue the index
                sx={{
                  backgroundColor:
                    activeIndex === index + ApisMenu.length
                      ? "#FFD65A"
                      : "transparent",
                  color:
                    activeIndex === index + ApisMenu.length ? "#000" : "#fff",
                  "&:hover": {
                    backgroundColor: "#FFD65A",
                    color: "#FFD65A",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color:
                      activeIndex === index + ApisMenu.length ? "#000" : "#fff",
                  }}
                >
                  <i className={productMenuIcons[index]}></i>
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    color:
                      activeIndex === index + ApisMenu.length ? "#000" : "#fff",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <b className="ps-3 mt-3"> Support</b>
        <List>
          {Support.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={() =>
                  handleItemClick(
                    index + ApisMenu.length + productMenu.length,
                    text
                  )
                } // Add both ApisMenu and productMenu lengths
                sx={{
                  backgroundColor:
                    activeIndex === index + ApisMenu.length + productMenu.length
                      ? "#FFD65A"
                      : "transparent",
                  color:
                    activeIndex === index + ApisMenu.length + productMenu.length
                      ? "#000"
                      : "#fff",
                  "&:hover": {
                    backgroundColor: "#FFD65A",
                    color: "#FFD65A",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color:
                      activeIndex ===
                        index + ApisMenu.length + productMenu.length
                        ? "#000"
                        : "#fff",
                  }}
                >
                  <i className={SupportIcons[index]}></i>
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    color:
                      activeIndex ===
                        index + ApisMenu.length + productMenu.length
                        ? "#000"
                        : "#fff",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Main
        open={open}
        style={{
          height: "auto",
          // backgroundColor: "#5E686D",
          minHeight: "100vh",
        }}
        className="card"
      >
        <DrawerHeader />
        <Typography>
          <Outlet />
        </Typography>
      </Main>
    </Box>
  );
}
