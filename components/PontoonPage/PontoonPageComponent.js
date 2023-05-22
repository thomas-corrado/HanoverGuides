import { Stack, Typography, Box, Button, Grid } from "@mui/material";
import NavigationBarNonHome from "../General/NavigationBarNonHome";
import ContactInfo from "../General/Contact/ContactInfo";
import Image from "next/image";
import { useRouter } from "next/router";
import PontoonImageGallery from "./PontoonImageGallery/PontoonImageGallery"

const PontoonPageComponent = () => {
    const router = useRouter(); 
   
  return (
    <>
      <Stack className="about-stack" direction="column">
        <NavigationBarNonHome pages={pages} />
      </Stack>

      <Box
        sx={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          direction="column"
          sx={{
            width: "100%",
            justifyContent: "center",
            display: "flex",
            textAlign: "center",
          }}
        >
          <Typography variant="h2_about" mt={5} mb={3}>
            Pontoon Boats
          </Typography>
          <Box
            sx={{
              width: { xs: "calc(90vw)", md: "calc(20vw + 20rem)" },
              height: "calc(10vw + 15rem)",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <Image
              // data-aos="fade-in"
              priority
              fill
              style={{ objectFit: "cover" }}
              quality={100}
              src="https://s3.amazonaws.com/tbcguides.fish/MarcOkrantFinal.jpg"
              alt="middle-aged man smiling, wearing tan hat, and wearing sunglasses while standing in water and holding fish horizontally"
              loading="eager"
            ></Image>
          </Box>
          <Box
            mt={4}
            mb={4}
            sx={{
              width: { xs: "85vw", md: "75vw" },
              display: "flex",
              alignSelf: "center",
            }}
          >
            <Grid container spacing={{ md: 12 }}>
              <Grid item xs={12} md={6}>
                <Stack direction="column">
                  <Box
                    sx={{
                      width: "calc(75px + 6vw)",
                      height: "calc(75px + 6vw)",
                      position: "relative",
                      display: "flex",
                      alignSelf: "center",
                    }}
                  >
                    <Image
                      priority
                      fill
                      style={{ objectFit: "cover" }}
                      quality={100}
                      src="https://s3.amazonaws.com/tbcguides.fish/anchor_FILL0_wght400_GRAD0_opsz48.svg"
                      alt="frozen-over-lake"
                      loading="eager"
                    ></Image>
                  </Box>
                  <Typography variant="h5_pontoon" mt={3} mb={2}>
                    Marc Okrant is captain of “The Menagerie” an extremely fun
                    and family-friendly 24-foot pontoon boat that can
                    accommodate up to 8 passengers. The boat is well equipped
                    for enjoying time with family and friends, catching some
                    sun, and doing some excellent fishing in many New Hampshire
                    and Vermont waters. The Menagerie has a quiet four-stroke
                    115 horsepower Mercury engine, ample cooler space and a
                    grill for cooking steaks, burgers, chicken and more.
                  </Typography>
                </Stack>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  top: {
                    xs: "-.5rem",
                    md: "0",
                    position: "relative",
                    display: "flex",
                  },
                }}
              >
                <Stack direction="column">
                  <Box
                    sx={{
                      width: "calc(75px + 6vw)",
                      height: "calc(75px + 6vw)",
                      position: "relative",
                      display: "flex",
                      alignSelf: "center",
                    }}
                  >
                    <Image
                      priority
                      fill
                      style={{ objectFit: "cover", paddingTop: "1rem" }}
                      quality={100}
                      src="https://s3.amazonaws.com/tbcguides.fish/person_FILL0_wght400_GRAD0_opsz48.svg"
                      alt="frozen-over-lake"
                      loading="eager"
                    ></Image>
                  </Box>
                  <Typography variant="h5_pontoon" mt={3}>
                    Captain Marc has been boating and fishing since his
                    childhood and is now a licensed commercial boat operator.
                    Originally from the state of Connecticut, he has fished for
                    stripers in the River’s estuary where it empties into the
                    Long Island sound. Today he spends most of his time on the
                    Connecticut River bordering Vermont and New Hampshire, where
                    you catch bass, pike and even walleye. When not boating or
                    fishing, Marc enjoys traveling, having been to 4 continents
                    and over 40 states. Ask him about some of his journeys on
                    your next boat trip.
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Box>

          <Box
            mb={2}
            mt={{ xs: 0, md: 1 }}
            sx={{
              width: "100vw",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              color="secondary"
              variant="outlined"
              sx={{ width: { xs: "80%", sm: "45%", md: "35%" } }}
              onClick={() => router.push(`/reservations`)}
            >
              <Typography variant="h3_about">Make a Reservation</Typography>
            </Button>
          </Box>

          <PontoonImageGallery />
        </Stack>
      </Box>

      <ContactInfo />
    </>
  );
};

export default PontoonPageComponent;

const pages = ["about", "reservations", "explore", "gallery"];
