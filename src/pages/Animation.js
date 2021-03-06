import { Image } from "@chakra-ui/react";
import React from "react";
import animation from "../assets/browser dumy.svg";
function Animation() {
  return (
    <section className="animation">
      <Image
        src={`${animation}`}
        width="80%"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      />
    </section>
  );
}

export default Animation;
