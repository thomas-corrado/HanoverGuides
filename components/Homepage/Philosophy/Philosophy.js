import { Stack, Grid, Typography, Button, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
// ..

const Philosophy = () => {
    const router = useRouter(); 
    useEffect(() => {
      AOS.init();
    }, []);

    return (
      <ThemeProvider theme={PhilosophyTheme}>
        <Box
          sx={{
            width: "100vw",
            backgroundColor: "#5D6D86",
            alignItems: "center",
          }}
        >
          <Grid
            data-aos="fade-right"
            container
            direction="row"
            rowSpacing={2}
            mt={{ xs: 6, sm: 6, lg: 18 }}
            mb={{ xs: 8, sm: 8, lg: 20 }}
          >
            <Grid item container lg={7} md={12} sm={12} xs={12}>
              <Typography
                variant="h3"
                color="primary"
                ml={{ xs: 4, sm: 4, md: 6, lg: 8 }}
                sx={{ width: { xs: "80%", sm: "80%", md: "80%", lg: "100%" } }}
              >
                By providing instruction on each trip, TBC fishing experiences
                gives guests the chance to become lifelong fishers.
              </Typography>
            </Grid>

            <Grid
              item
              container
              lg={4}
              md={12}
              sm={12}
              xs={12}
              ml={{ xs: 4, sm: 4, md: 6, lg: 8 }}
              sx={{ justifyContent: { xs: "none", lg: "center" } }}
            >
              <Stack
                direction="column"
                sx={{ justifyContent: "center" }}
                spacing={1}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                  }}
                >
                  <Typography variant="h6" color="primary">
                    Learn more about what a <br /> day with TBC Guides is like.
                  </Typography>
                </Box>

                <Button
                  disableRipple
                  variant="contained"
                  color="offwhite"
                  sx={{
                    borderRadius: "0",
                    padding: "1rem",
                  }}
                  onClick={() =>
                    router.push(
                      "https://hub.jacksonkayak.com/team-jk/kayak-fishing-regional-team/michael-blatt/"
                    )
                  }
                >
                  <Typography variant="h6" color="secondary">
                    Learn More
                  </Typography>
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    );
}

export default Philosophy

const PhilosophyTheme = createTheme({
  typography: {
    fontFamily: ["belda-normal"].join(","),
    h3: {
      fontSize: "calc(2vmin + 3.5vmax - 1vw)",
      lineHeight: "calc(2vmin + 3.5vmax - 1vw + 1.5rem)",
    },
    h6: {
      fontSize: "calc((2vmin + 3.5vmax - 1vw)/2)",
    },
  },
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#5D6D86",
    },
    offwhite: {
      main: "#D9D9D9",
    },
    offblue: {
      main: "#5D6D86",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#D9D9D9",
          },
        },
      },
    },
  },
});