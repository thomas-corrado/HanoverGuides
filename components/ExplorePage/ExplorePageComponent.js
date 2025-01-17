import { Stack } from "@mui/material";
import NavigationBarNonHome from "../General/NavigationBarNonHome";
import ContactInfo from "../General/Contact/ContactInfo";
import ExploreLanding from "./Landing/ExploreLanding"
import AttractionComponent from "./Attraction/AttractionComponent";

const ExplorePageComponent = () => {
  return (
    <>
      <Stack className="about-stack" direction="column">
        <NavigationBarNonHome pages={pages} />
        
      </Stack>

      <ExploreLanding/>
      <AttractionComponent/>
     
      <ContactInfo />
    </>
  );
};

export default ExplorePageComponent;

const pages = ["about", "reservations", "services"];
