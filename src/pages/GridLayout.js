import { Grid, GridItem } from "@chakra-ui/layout";
import React from "react";
import Hero from "./Hero.js";
import Animation from "./Animation";
import Goals from "./Goals";

import bg from "../assets/top.png";
import bgSmall from "../assets/top_small.png";
import { colors } from "../theme/Color.js";
import Howitwoks from "./Howitwoks.js";
import Pricing from "./Pricing.js";

function GridLayout() {
  return (
    <Grid
      overflow="hidden"
      templateRows={
        "auto"
        //   [
        //   "auto auto repeat(2, 1fr)",
        //   "auto auto repeat(2, 1fr)",
        //   "auto auto repeat(2, 1fr)",
        //   "auto auto repeat(2, 1fr)",
        //   "auto auto repeat(2, 1fr)",
        //   "auto auto repeat(2, 1fr)",
        // ]
      }
    >
      {/* Hero */}
      <GridItem
        position="relative"
        rowStart={1}
        height="100vh"
        backgroundColor={`${colors.main_Color.primery_w}`}
        backgroundImage={[
          `url(${bgSmall})`,
          `url(${bgSmall})`,
          `url(${bgSmall})`,
          `url(${bg})`,
          `url(${bg})`,
          `url(${bg})`,
        ]}
        backgroundSize="cover"
        backgroundPosition="center"
        overflow="hidden"
      >
        <Hero />
      </GridItem>

      {/* Animatio */}
      <GridItem
        position="relative"
        rowStart={2}
        height={["50vh", "50vh", "50vh", "90vh", "100vh", "100vh"]}
        backgroundColor={`${colors.main_Color.secondery_1_G}`}
      >
        <Animation />
      </GridItem>

      {/* Goale */}
      <GridItem
        rowStart={3}
        backgroundColor={`${colors.main_Color.secondery_1_G}`}
      >
        <Goals />{" "}
      </GridItem>

      {/* How it works */}
      <GridItem
        rowStart={4}
        height={["auto", "auto", "auto", "auto", "auto", "auto"]}
        backgroundColor={`${colors.main_Color.secondery_1_G}`}
      >
        <Howitwoks />
      </GridItem>

      {/* Pricing */}

      <GridItem
        height={["100vh", "100vh", "120vh", "120vh", "120vh", "100vh"]}
        rowStart={5}
        background={
          "linear-gradient(119deg, #7C67F1 0%, #65DE6D87 65%, #FF00C4 100%)"
        }
      >
        <Pricing />
      </GridItem>
    </Grid>
  );
}

export default GridLayout;
