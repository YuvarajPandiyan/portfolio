import { EmailIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Container,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/layout";
import { Button, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import FirstCard from "../components/FirstCard";
import SecondCard from "../components/SecondCard.js";
// color import
import { colors } from "../theme/index";

// w="450px"
// h="630px"
const wB = ["300px", "300px", "450px", "450px", "450px", "450px"];
const hB = ["430px", "430px", "630px", "630px", "630px", "630px"];

// w="370px"
//h="530px"
// const wS = ["200px", "200px", "200px", "200px", "370px", "370px"];
// const hS = ["330px", "330px", "330px", "330px", "530px", "530px"];

const fontSize = ["1.2rem", "1.2rem", "2rem", "2rem", "2rem", "2rem"];

//  {/* for the 1st render to set the display state display or not*/}
const disp = window.innerWidth > 1450 ? "Display" : "NotDisplay";

function Pricing() {
  const [display, setdisplay] = useState(disp);

  return (
    <>
      <Center>
        <Wrap spacing="100px">
          {/* when we triget the resize event then only it fiers */}
          {window.addEventListener("resize", () => {
            if (window.innerWidth > 1450) {
              setdisplay("Display");
            } else {
              setdisplay("NotDisplay");
            }
          })}
          {console.log("end end")}
          {display === "Display" ? <FirstCard /> : null}

          <WrapItem>
            <Box
              w={wB}
              h={hB}
              background={
                "transparent linear-gradient(162deg, #FFFFFF 0%, #EEEEEE5E 20%, #8080800A 100%) 0% 0% no-repeat padding-box"
              }
              boxShadow="20px 20px 20px #00000029"
              rounded={60}
              overflow="hidden"
              marginTop={10}
              transition="all 0.2s"
              _hover={{ transform: "scale(1.02)" }}
              sx={{ backfaceVisibility: "hidden" }}
            >
              <Center>
                <Stack>
                  <Text
                    as="h3"
                    color={`${colors.textColor.c_1}`}
                    fontSize={[
                      "2.5rem",
                      "2.5rem",
                      "4.9rem",
                      "4.9rem",
                      "4.9rem",
                      "4.9rem",
                    ]}
                    fontWeight="bold"
                    paddingTop="10"
                    paddingRight="10"
                    paddingLeft="10"
                    paddingBottom="1"
                  >
                    Best
                  </Text>
                  <Text
                    fontSize={fontSize}
                    fontFamily="Yusei Magic"
                    color="black"
                    textAlign="center"
                  >
                    Audit
                  </Text>
                  <Text
                    fontSize={fontSize}
                    fontFamily="Yusei Magic"
                    color="black"
                    textAlign="center"
                  >
                    Web Design
                  </Text>
                  <Text
                    fontSize={fontSize}
                    fontFamily="Yusei Magic"
                    color="black"
                    textAlign="center"
                  >
                    Development
                  </Text>
                  <Text
                    fontSize={fontSize}
                    fontFamily="Yusei Magic"
                    color="black"
                    textAlign="center"
                  >
                    BackUp
                  </Text>
                  <Text
                    fontSize={fontSize}
                    fontFamily="Yusei Magic"
                    color="black"
                    textAlign="center"
                  >
                    Maintenance
                  </Text>
                  <Text
                    fontSize={fontSize}
                    fontFamily="Yusei Magic"
                    color="black"
                    textAlign="center"
                  >
                    Hosting
                  </Text>
                  <Center>
                    <Button
                      marginTop={[
                        ".8rem",
                        ".8rem",
                        ".8rem",
                        "2rem",
                        "2rem",
                        "2rem",
                      ]}
                      colorScheme="button_1"
                      display="inline-block"
                      fontSize="xl"
                    >
                      Pricing
                    </Button>
                  </Center>
                </Stack>
              </Center>
            </Box>
          </WrapItem>

          {/* when we triget the resize event then only it fiers */}
          {window.addEventListener("resize", () => {
            if (window.innerWidth > 1450) {
              setdisplay("Display");
            } else {
              setdisplay("NotDisplay");
            }
          })}
          {console.log("end end")}
          {display === "Display" ? <SecondCard /> : null}
        </Wrap>
      </Center>

      <Container
        // overflow="hidden"
        maxWidth="none"
        h="200px"
        w="100vw"
        backgroundColor="#2228D5"
        position="absolute"
        bottom="0"
        sx={{
          "-webkit-clip-path":
            "polygon(54% 9%, 71% 0, 86% 9%, 100% 0, 100% 100%, 54% 100%, 0 100%, 0 0, 16% 10%, 32% 2%)",
          "clip-path":
            "polygon(54% 9%, 71% 0, 86% 9%, 100% 0, 100% 100%, 54% 100%, 0 100%, 0 0, 16% 10%, 32% 2%)",
        }}
      >
        {" "}
        <Heading
          as="h1"
          marginTop="5"
          marginLeft="5"
          position="absolute"
          fontSize={["2rem", "2rem", "3rem", "3rem", "4rem", "4rem"]}
          fontWeight="300"
          letterSpacing="5px"
          color={`${colors.main_Color.secondery_1_G}`}
        >
          SIRPAM
        </Heading>
        <Heading
          as="h1"
          marginTop="5"
          display="inline-block"
          marginLeft="6"
          // position="absolute"
          fontSize={["2rem", "2rem", "3rem", "3rem", "4rem", "4rem"]}
          fontWeight="700"
          letterSpacing="5px"
          color={`${colors.assets_color.assets_color_3}`}
        >
          SIRPAM
        </Heading>
        <Wrap padding="5px" alignContent="space-between">
          <WrapItem>
            <Text color="white" fontSize="2rm">
              Github
            </Text>
          </WrapItem>
          <WrapItem>
            <Text color="white" fontSize="2rm">
              LinkedIn
            </Text>
          </WrapItem>
          <WrapItem>
            <Text color="white" fontSize="2rm">
              Instagram
            </Text>
          </WrapItem>
          <WrapItem right="0">
            <Input
              placeholder="Email"
              size="md"
              colorScheme="linkedin"
              background="white"
            />
            <Button
              leftIcon={<EmailIcon />}
              marginLeft="3"
              colorScheme="teal"
              variant="solid"
            >
              Email
            </Button>
          </WrapItem>
          {/* </HStack> */}
        </Wrap>
        <Center>
          <Text
            marginLeft="10"
            color="white"
            fontSize="2rm"
            position="absolute"
            bottom="0"
          >
            © 2021 sirpam
          </Text>
        </Center>
      </Container>
    </>
  );
}

export default Pricing;
