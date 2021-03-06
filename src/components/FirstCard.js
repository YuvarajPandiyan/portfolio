import { Box, Center, Stack, Text, WrapItem } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";

// color import
import { colors } from "../theme/Color";

// w="450px"
// h="630px"
// const wB = ["300px", "300px", "300px", "300px", "450px", "450px"];
// const hB = ["430px", "430px", "430px", "430px", "630px", "630px"];

// w="370px"
//h="530px"
const wS = ["200px", "200px", "200px", "200px", "370px", "370px"];
const hS = ["330px", "330px", "330px", "330px", "530px", "530px"];

function FirstCard() {
  return (
    <WrapItem>
      {console.log(window.innerHeight, window.innerWidth)}
      <Box
        w={wS}
        h={hS}
        background={
          "transparent linear-gradient(162deg, #FFFFFF 0%, #EEEEEE5E 20%, #8080800A 100%) 0% 0% no-repeat padding-box"
        }
        boxShadow="20px 20px 20px #00000029"
        rounded={60}
        overflow="hidden"
        marginTop={"6rem"}
        transition="all 0.2s"
        _hover={{ transform: "scale(1.02)" }}
        sx={{ backfaceVisibility: "hidden" }}
      >
        <Center>
          <Stack>
            <Text
              as="h3"
              color={`${colors.textColor.c_1}`}
              fontSize={"4.9rem"}
              fontWeight="bold"
              paddingTop="10"
              paddingRight="10"
              paddingLeft="10"
              paddingBottom="1"
            >
              Basic
            </Text>
            <Text
              fontSize="2rem"
              fontFamily="Yusei Magic"
              color="black"
              textAlign="center"
            >
              Audit
            </Text>
            <Text
              fontSize="2rem"
              fontFamily="Yusei Magic"
              color="black"
              textAlign="center"
            >
              Web Design
            </Text>
            <Text
              fontSize="2rem"
              fontFamily="Yusei Magic"
              color="black"
              textAlign="center"
            >
              Development
            </Text>
            <Text
              fontSize="2rem"
              fontFamily="Yusei Magic"
              color="black"
              textAlign="center"
            >
              Hosting
            </Text>
            <Center>
              <Button
                marginTop={[".8rem", ".8rem", ".8rem", "2rem", "2rem", "2rem"]}
                colorScheme="button"
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
  );

  //1750
  //   return window.innerWidth > 1450 ? null : (
  //     <WrapItem id="one">
  //       <Box
  //         w={wS}
  //         h={hS}
  //         background={
  //           "transparent linear-gradient(162deg, #FFFFFF 0%, #EEEEEE5E 20%, #8080800A 100%) 0% 0% no-repeat padding-box"
  //         }
  //         boxShadow="20px 20px 20px #00000029"
  //         rounded={60}
  //         overflow="hidden"
  //         marginTop={"6rem"}
  //         transition="all 0.2s"
  //         _hover={{ transform: "scale(1.02)" }}
  //         sx={{ backfaceVisibility: "hidden" }}
  //       >
  //         <Center>
  //           <Stack>
  //             <Text
  //               as="h3"
  //               color={`${colors.textColor.c_1}`}
  //               fontSize={"4.9rem"}
  //               fontWeight="bold"
  //               paddingTop="10"
  //               paddingRight="10"
  //               paddingLeft="10"
  //               paddingBottom="1"
  //             >
  //               Basic
  //             </Text>
  //             <Text
  //               fontSize="2rem"
  //               fontFamily="Yusei Magic"
  //               color="black"
  //               textAlign="center"
  //             >
  //               Audit
  //             </Text>
  //             <Text
  //               fontSize="2rem"
  //               fontFamily="Yusei Magic"
  //               color="black"
  //               textAlign="center"
  //             >
  //               Web Design
  //             </Text>
  //             <Text
  //               fontSize="2rem"
  //               fontFamily="Yusei Magic"
  //               color="black"
  //               textAlign="center"
  //             >
  //               Development
  //             </Text>
  //             <Text
  //               fontSize="2rem"
  //               fontFamily="Yusei Magic"
  //               color="black"
  //               textAlign="center"
  //             >
  //               Hosting
  //             </Text>
  //             <Center>
  //               <Button
  //                 marginTop={[".8rem", ".8rem", ".8rem", "2rem", "2rem", "2rem"]}
  //                 colorScheme="button"
  //                 display="inline-block"
  //                 fontSize="xl"
  //               >
  //                 Pricing
  //               </Button>
  //             </Center>
  //           </Stack>
  //         </Center>
  //       </Box>
  //     </WrapItem>
  //   );
}

export default FirstCard;
