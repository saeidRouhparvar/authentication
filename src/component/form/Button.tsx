import { Box, BoxProps, Flex } from "@chakra-ui/react";
import { Ellipse4, Ellipse5, Ellipse_4, Ellipse_5,  RightArrowBlue, RightArrowWhite } from "../../assets/Svg";

interface Interface extends BoxProps {
  reset?: any;
  children?: string;
  type?: string;
}

const Button = ({ children, type, ...reset }: Interface) => {
  return (
    <Box
      bg={
        type === ("fill" && "otp")
          ? "linear-gradient(99deg, #4960F9 3.83%, #1433FF 81.81%)"
          : "#FFF"
      }
      borderRadius={"28px"}
      pos={"relative"}
      border={type === "fill" ? "" : "1px solid #2743FD"}
      {...reset}
    >
      <Box p={"18px 24px"}>
        {type === "fill" && (
          <>
            <Box pos={"absolute"} top={"0"} right={"0"}>
              {Ellipse5}
            </Box>
            <Box pos={"absolute"} top={"0"} right={"0"}>
              {Ellipse4}
            </Box>
          </>
        )}
        {type === "otp" && 
        <>
        <Box pos={"absolute"} top={"0"} right={"0"}>{Ellipse_4}</Box>
        <Box pos={"absolute"} bottom={"0"} left={"0"}>{Ellipse_5}</Box>
        </>
        }

        <Flex
          align={"center"}
          borderTopRadius={"30px"}
          justifyContent={type === "otp" ? "center" : "space-between"}
        >
          <Box fontSize={"20px"} color={type === ("fill" && "otp") ? "#FFF" : "#2743FD"}>
            {children}
          </Box>
          <Box>{type === "fill" ? RightArrowWhite : type === "otp" ? "" : RightArrowBlue}</Box>
        </Flex>
      </Box>
    </Box>
  );
};
export default Button;
