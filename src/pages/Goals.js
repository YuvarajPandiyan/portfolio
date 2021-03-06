import { Center, Wrap, WrapItem } from "@chakra-ui/layout";
import { Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
// color object
import { colors } from "../theme/index";

// images
import Fast from "../assets/fast.svg";
import Responsive from "../assets/responcive.svg";
import accsasiblity from "../assets/accsasiblity.svg";

function Goals() {
  const fontsize = ["1rem", "1rem", "1.5rem", "1.5rem", "1.8rem", "2rem"];
  const margintop = ["20px", "20px", "80px", "100px", "100px", "100px"];
  const padding = ["0", "0", "0", "30px", "50px", "100px"];
  return (
    <section className="Goals">
      <Heading
        as="h2"
        color={`${colors.main_Color.primery_w}`}
        fontSize={"5rem"}
      >
        {" "}
        Goals:
      </Heading>
      <Wrap spacing="20px" justify="center">
        <WrapItem padding={padding}>
          <Center position="relative">
            <Image marginBottom={margintop} boxSize={"400px"} src={`${Fast}`} />
            <Text
              position="absolute"
              bottom="0"
              color={`${colors.main_Color.primery_w}`}
              fontSize={fontsize}
              fontWeight="bold"
              textAlign="center"
            >
              Fast load time and lag free is main concern.
            </Text>
          </Center>
          {/* <Center>
            
          </Center> */}
        </WrapItem>

        <WrapItem padding={padding}>
          <Center position="relative" h="500px">
            <Image
              marginBottom={margintop}
              boxSize={"390px"}
              src={`${Responsive}`}
            />
            <Text
              position="absolute"
              bottom="0"
              color={`${colors.main_Color.primery_w}`}
              fontSize={fontsize}
              fontWeight="bold"
              textAlign="center"
            >
              Responsive design for desktop and mobile.
            </Text>
          </Center>
          {/* <Center>
            
          </Center> */}
        </WrapItem>

        <WrapItem padding={padding}>
          <Center position="relative" h="500px">
            <Image
              marginBottom={margintop}
              boxSize={"400px"}
              src={`${accsasiblity}`}
            />
            <Text
              position="absolute"
              bottom="0"
              color={`${colors.main_Color.primery_w}`}
              fontSize={fontsize}
              fontWeight="bold"
              textAlign="center"
            >
              Accessibility and scalability.
            </Text>
          </Center>
          {/* <Center>
            
          </Center> */}
        </WrapItem>
      </Wrap>
      <Center>
        <Text
          className="qut_2"
          marginTop={["none", "none", "none", "none", "8rem", "10rem"]}
          sx={{
            "-webkit-text-fill-color": "transparent",
            "-webkit-text-stroke-width": "1px",
            "-webkit-text-stroke-color": `${colors.assets_color.assets_color_1}`,
          }}
          fontSize={[".5rem", ".6rem", "1.5rem", "2rem", "2rem", "2rem"]}
          textAlign="center"
        >
          100% It work possible to connect internet with customer.
        </Text>
      </Center>
    </section>
  );
}

export default Goals;
