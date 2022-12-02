import * as React from "react";
import { useState } from "react";
import { AppBar, Box, Toolbar, Container } from "@mui/material";
import TBCLogo from "./TBCGuidesHeaderLogo/TBCLogo";
import CompressedTBCLogo from "./TBCGuidesHeaderLogo/CompressedTBCLogo";
import DrawerWrapper from "../Drawer/DrawerWrapper";
import HamburgerWrapper from "../Drawer/HamburgerWrapper";
import HeaderBarPageButtons from "./HeaderBarPageButtons";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const menuAndDrawer = createTheme({
  typography: {
    fontFamily: ["Antonio"].join(","),
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "white",
          width: "100vw",
          height: "100%",
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: "none",
          backgroundColor: "transparent",
        },
      },
    },
  },
});

const pages = ["about", "reservations", "gallery"];

const AppBarWrapper = () => {

  const [isOpen, setOpen] = useState(false);
  
  return (
    <ThemeProvider theme={menuAndDrawer}>
      <Box mt={3}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "transparent", boxShadow: "none" }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* Desktop View Logo */}
              <TBCLogo />

              {/* Drawer View Logo */}
              <CompressedTBCLogo />

              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                {/* Drawer View Hamburger Icon */}
                <HamburgerWrapper isOpen={isOpen} setOpen={setOpen} />

                {/* Drawer View Buttons */}
                <DrawerWrapper isOpen={isOpen} pages={pages} />
              </Box>

              {/* Desktop View Buttons */}
              <HeaderBarPageButtons pages={pages} />
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default AppBarWrapper;
