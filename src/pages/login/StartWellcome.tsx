import { Box, Flex } from "@chakra-ui/react";
import { Ellipse_1, Ellipse_2, Ellipse_3 } from "../../assets/Svg";
import Button from "../../component/form/Button";

const StartWelcome = () => {
  return (
    <Box h={"100vh"}>
      <Box pos={"absolute"} top={0}>
        {Ellipse_3}
      </Box>
      <Box pos={"absolute"} top={0}>
        {Ellipse_2}
      </Box>
      <Box pos={"absolute"} top={0}>
        {Ellipse_1}
      </Box>
      <Flex
        direction={"column"}
        gap={"16px"}
        pos={"absolute"}
        top={"72vh"}
        w={"full"}
        pb={"73px"}
        px={"30px"}
      >
        <Button type="fill">Sign In</Button>
        <Button>Sign Up</Button>
      </Flex>
    </Box>
  );
};
export default StartWelcome;
