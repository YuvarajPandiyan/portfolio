import React from "react";
import { Center, Heading, Wrap, WrapItem, Image, Text } from "@chakra-ui/react";

// color import
import { colors } from "../theme/index";

// images import
import BrangQA from "../assets/lll/B&q.svg";
import Design from "../assets/lll/Draw.svg";
import Dev from "../assets/lll/dev.svg";
import Party from "../assets/lll/party.svg";

import Scop from "../assets/lll/scop.png";
import Lamp from "../assets/lll/lamp.png";
import Spekar from "../assets/lll/spekar.png";
import Flag from "../assets/lll/flag.png";
import Gift from "../assets/lll/gift.png";

function Howitwoks() {
  const padding_otherSides = ["0", "0", "0", "30px", "50px", "100px"];
  const fontsize = ["1rem", "1rem", "1.5rem", "1.5rem", "1.8rem", "2rem"];
  const headingFontsize = ["3rem", "3rem", "3rem", "3rem", "4rem", "5rem"];
  const imageSize3D = ["40px", "60px", "80px", "150px", "250px", "400px"];
  return (
    <section className="Howitwoks">
      <Center>
        <Heading
          as="h2"
          color={`${colors.main_Color.primery_w}`}
          fontSize={headingFontsize}
          paddingTop={["30px"]}
        >
          {" "}
          How It Works:
        </Heading>
      </Center>

      <Center>
        <Wrap
          h={"auto"}
          w={"auto"}
          paddingRight={"5%"}
          paddingLeft={"5%"}
          paddingBottom={"5%"}
          paddingTop={"0%"}
          backgroundColor={`${colors.assets_color.assets_color_4}`}
          transform="skewX(10deg)"
          pacing="20px"
          justify="center"
        >
          <WrapItem padding={padding_otherSides} transform="skewX(-10deg)">
            <Center>
              <Image src={`${BrangQA}`} boxSize={"250px"} />
              <Text
                position="absolute"
                bottom="0"
                color={`${colors.main_Color.primery_w}`}
                fontSize={fontsize}
                fontWeight="bold"
                textAlign="center"
                marginTop={"20px"}
              >
                Brand Question & Answer.
              </Text>
            </Center>
          </WrapItem>

          <WrapItem padding={padding_otherSides} transform="skewX(-10deg)">
            <Center>
              <Image src={`${Design}`} boxSize={"250px"} />
              <Text
                position="absolute"
                bottom="0"
                color={`${colors.main_Color.primery_w}`}
                fontSize={fontsize}
                fontWeight="bold"
                textAlign="center"
                marginTop={"20px"}
              >
                Web Design & UX Research.
              </Text>
            </Center>
          </WrapItem>

          <WrapItem padding={padding_otherSides} transform="skewX(-10deg)">
            <Center>
              <Image src={`${Dev}`} boxSize={"250px"} />
              <Text
                position="absolute"
                bottom="0"
                color={`${colors.main_Color.primery_w}`}
                fontSize={fontsize}
                fontWeight="bold"
                textAlign="center"
                marginTop={"20px"}
              >
                Web Development & Optimization.
              </Text>
            </Center>
          </WrapItem>

          <WrapItem padding={padding_otherSides} transform="skewX(-10deg)">
            <Center>
              <Image src={`${Party}`} boxSize={"250px"} />
              <Text
                position="absolute"
                bottom="0"
                color={`${colors.main_Color.primery_w}`}
                fontSize={fontsize}
                fontWeight="bold"
                textAlign="center"
                marginTop={"20px"}
              >
                Publish and & Party Hard.
              </Text>
            </Center>
          </WrapItem>
        </Wrap>
      </Center>

      <Center>
        <Wrap>
          <WrapItem>
            <Image src={`${Scop}`} boxSize={imageSize3D} />
          </WrapItem>
          <WrapItem>
            <Image src={`${Lamp}`} boxSize={imageSize3D} />
          </WrapItem>
          <WrapItem>
            <Image src={`${Spekar}`} boxSize={imageSize3D} />
          </WrapItem>
          <WrapItem>
            <Image src={`${Flag}`} boxSize={imageSize3D} />
          </WrapItem>
          <WrapItem>
            <Image src={`${Gift}`} boxSize={imageSize3D} />
          </WrapItem>
        </Wrap>
      </Center>
    </section>
  );
}

export default Howitwoks;
