import { Box, BoxProps } from "@chakra-ui/react";
import { Ellipse1, Ellipse2, Ellipse3, Logo } from "../assets/Svg";

interface Interface extends BoxProps {
    reset?:any
    children?:any
}

const SighInLayout = ({ children,...reset }: Interface) => {
  return (
    <Box flex={1} {...reset}>
      <Box>
        <Box>{Ellipse3}</Box>
        <Box pos={"absolute"} top={"0"}>
          {Ellipse2}
        </Box>
        <Box pos={"absolute"} top={"0"}>
          {Ellipse1}
        </Box>
        <Box pos={"absolute"} top={"64px"} left={"52px"}>
          {Logo}
        <Box mt={"16px"} lineHeight={"normal"} fontSize={"28px"} color={"#FFF"} fontWeight={"400"}>Welcome <br/> Back</Box>
        </Box>
      </Box>
      <Box w={"100%"} pos={"absolute"} top={"330px"}>{children}</Box>
    </Box>
  );
};

export default SighInLayout;
