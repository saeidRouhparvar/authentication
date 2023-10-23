import { Box, Flex, Input } from "@chakra-ui/react";
import { OTP } from "../../assets/Svg";
import Button from "../../component/form/Button";

const OtpCode = () => {
  return (
    <Flex direction={"column"} align={"center"}>
      <Box mt={"6.25rem"}>{OTP}</Box>
      <Box fontSize={"24px"} fontWeight={700} mt={"3.75rem"}>
        OTP Verification
      </Box>
      <Flex gap={2} color={"#3A3A3A"} mt={"1.5rem"}>
        <Box>Enter the OTP sent to</Box>
        <Box fontWeight={700}>+234 706 067 2335</Box>
      </Flex>

      <Flex px={"3.375rem"} gap={"1.5rem"} mt={"3.25rem"}>
        <Flex fontSize={"1.5rem"} borderBottom={"1px solid #2743FD"}>
          <Input
            outline={"none"}
            type="number"
            bg={"#FFF"}
            w={"100%"}
            textAlign={"center"}
            maxLength={1}
          />
        </Flex>
        <Flex fontSize={"1.5rem"} borderBottom={"1px solid #2743FD"}>
          <Input
            outline={"none"}
            type="number"
            bg={"#FFF"}
            w={"100%"}
            textAlign={"center"}
            maxLength={1}
          />
        </Flex>
        <Flex fontSize={"1.5rem"} borderBottom={"1px solid #2743FD"}>
          <Input
            outline={"none"}
            type="number"
            bg={"#FFF"}
            w={"100%"}
            textAlign={"center"}
            maxLength={1}
          />
        </Flex>
        <Flex fontSize={"1.5rem"} borderBottom={"1px solid #2743FD"}>
          <Input
            outline={"none"}
            type="number"
            bg={"#FFF"}
            w={"100%"}
            textAlign={"center"}
            maxLength={1}
          />
        </Flex>
      </Flex>

      <Flex gap={3} mt={"3.75rem"} align={"center"}>
        <Box color={"#B9B9B9"} fontSize={"14px"} fontWeight={500}>Didn’t you receive the OTP? </Box>
        <Box color={"#2743FD"} fontSize={"16px"} fontWeight={600}>Resend OTP</Box>
      </Flex>
      <Box px={"30px"} w={"full"}>

      <Button type="otp" mt={"4.125rem"} mb={"5.5rem"}>Verify</Button>
      </Box>
    </Flex>
  );
};
export default OtpCode;
