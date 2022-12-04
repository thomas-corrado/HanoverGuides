import { Box, Grid } from "@mui/material";
import GenericGridItemWrapper from "./GridItems/GenericGridItemWrapper";
import MadeBy from "./GridItems/MadeBy";
import BusinessHours from "./GridItems/BusinessHours";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const iconTheme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
        disableFocusRipple: true,
      },
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
          },
          padding: 0,
        },
      },
    },
  },
});


const ContactInfo = () => {
    return (
      <ThemeProvider theme={iconTheme}>
        <Box
          sx={{
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#596d90",
          }}
        >
          <Grid
            container
            direction="row"
            rowSpacing={4}
            sx={{
              width: "90vw",
            }}
            mt={4}
          >
            <MadeBy descriptionOne="Made by Tommy Corrado" />

            {generics.map((item) => (
              <GenericGridItemWrapper key={item} items={item} />
            ))}

            <BusinessHours />
          </Grid>
        </Box>
      </ThemeProvider>
    );
}

export default ContactInfo

const generics = [
  [
    "About",
    "Reservations",
    "Gallery"
  ],
  [
    "Hanover, NH, 03755", 
    "(828)-246-5616", 
    "tbcguides@gmail.com"
  ],
];
