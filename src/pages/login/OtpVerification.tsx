import { Box, Flex, Input } from "@chakra-ui/react";
import { OTP } from "../../assets/Svg";
import Button from "../../component/form/Button";

const OtpVerification = () => {
  return (
    <Flex direction={"column"} align={"center"}>
      <Box mt={"6.25rem"}>{OTP}</Box>
      <Box fontSize={"24px"} fontWeight={700} mt={"3.75rem"}>
        OTP Verification
      </Box>
      <Box color={"#3A3A3A"} textAlign={"center"} px={"30px"} mt={"1.5rem"}>
        We will send you a one time password to your registered mobile number
      </Box>
      <Box fontSize={"14px"} color={"#B9B9B9"} mt={"2.25rem"}>
        Enter Mobile Number
      </Box>
      <Box>
        <Input
          type="number"
          _focus={{ border: "none" }}
          bg={"#FFF"}
          borderBottom={"1px solid #2743FD"}
          w={"100%"}
        />
      </Box>
      <Box textAlign={"center"} w={"full"} px={"1.875rem"}>
        <Button textAlign={"center"} mt={"5.375rem"} mb={"4rem"}  type="otp">
          Get OTP
        </Button>
      </Box>
    </Flex>
  );
};
export default OtpVerification;
