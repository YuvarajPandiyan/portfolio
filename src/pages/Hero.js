import { Button, Container, Center, Heading, Text } from "@chakra-ui/react";
import React from "react";
// color import
import { colors } from "../theme/index";
console.log(colors.main_Color.secondery_1_G);
function Hero() {
  return (
    <section className="hero__section">
      {/* <Flex
        // display="inline-block"
        width={["90%", "90%", "90%", "50%", "50%", "50%"]}
        height="100vh"
      >
        
      </Flex> */}

      {/* Brand name */}
      <Container
        marginTop="20px"
        marginLeft="20px"
        position="relative"
        display="inline-block"
      >
        <Heading
          as="h1"
          position="absolute"
          fontSize={["3rem", "3rem", "5rem", "6rem", "8rem", "10rem"]}
          fontWeight="300"
          letterSpacing="5px"
          color={`${colors.main_Color.secondery_1_G}`}
        >
          SIRPAM
        </Heading>
        <Heading
          as="h1"
          display="inline-block"
          marginLeft="4px"
          // position="absolute"
          fontSize={["3rem", "3rem", "5rem", "6rem", "8rem", "10rem"]}
          fontWeight="700"
          letterSpacing="5px"
          color={`${colors.assets_color.assets_color_3}`}
        >
          SIRPAM
        </Heading>
        <Text
          position="absolute"
          left={["98px", "98px", "98px", "150px", "150px", "150px"]}
          bottom="0px"
          fontSize={[".5rem", ".5rem", "1rem", "1rem", "2rem", "2rem"]}
          color={`${colors.assets_color.assets_color_2}`}
        >
          is Sculpture
        </Text>
      </Container>
      {/* About me */}
      <Container marginLeft={["1rem", "1rem", "0rem", "0rem", "0rem", "5rem"]}>
        <Text
          // margin={
          //   (["65px 0px"],
          //   ["65px 0px"],
          //   ["65px 0px"],
          //   ["65px 10px"],
          //   ["65px 12px"],
          //   ["65px 65px"])
          // }
          marginTop={["10px", "10px", "40px", "50px", "65px", "65px"]}
          marginLeft={["0px", "0px", "0px", "0px", "10px", "65px"]}
          color={`${colors.main_Color.secondery_1_G}`}
          fontWeight="bold"
          fontSize={["1rem", "1rem", "1.4rem", "1.4rem", "2rem", "2rem"]}
        >
          Hai..!, I'm yuvaraj pandiyan S Designer and developer. Working on
          branding, web and solving client problems. Looking for a client all
          over the world.
        </Text>
        <Center>
          <Button
            marginTop={[".8rem", ".8rem", ".8rem", "2rem", "2rem", "2rem"]}
            colorScheme="button"
          >
            Can I help!
          </Button>
        </Center>
      </Container>

      {/* Qut 1 */}
      <Container
        marginLeft="0"
        marginTop="180px"
        position="absolute"
        bottom="0"
      >
        <Text
          sx={{
            "-webkit-text-fill-color": "transparent",
            "-webkit-text-stroke-width": "1px",
            "-webkit-text-stroke-color": "black",
          }}
          fontSize={["1rem", "1rem", "1.8rem", "2rem", "3rem", "3rem"]}
          textAlign="center"
        >
          Your web site with my idea can grow your business..!
        </Text>
      </Container>
      {/* Qut 2 */}

      <Container textAlign="right" maxWidth="none">
        <Text
          transform={[
            "none",
            "none",
            "none",
            "rotate(-90deg) translateY(25rem) translateX(-23%)",
            "rotate(-90deg) translateY(52rem) translateX(-25%)",
            "rotate(-90deg) translateY(50rem) translateX(-43%)",
          ]}
          opacity={[0, 0, 0, "40%", "40%", "40%"]}
          letterSpacing={"5px"}
          fontSize={["2rem", "2rem", "2rem", "2.5rem", "4rem", "3rem"]}
        >
          every pixel matters
        </Text>
      </Container>
    </section>
  );
}

export default Hero;
