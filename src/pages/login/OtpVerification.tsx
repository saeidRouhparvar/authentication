import { Box, Flex, Input, useToast, Button } from "@chakra-ui/react";
import {
  Ellipse_4,
  Ellipse_5,
  OTP,
} from "../../assets/Svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataInput from "../../component/form/DataInput";

const OtpVerification = () => {
  const [username, SetUsername] = useState("");
  const navigate = useNavigate();

  const onSubmit = () => {
    fetch("https://api-arshida.iran.liara.run/v1/auth/get-otp", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ field: username }),
    })
      .then((r) => r.json())
      .then((r) => {
        if (r.error) {
          toast({
            duration: 3000,
            status: "warning",
            title: r.message,
            isClosable: false,
          });
        } else {
          navigate("/otp_code", {
            state: {
              field: username,
            },
          });
        }
      });
  };
  const toast = useToast();
  return (
    <Flex className="fade" direction={"column"} align={"center"}>
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
        <DataInput
          onChange={(e: any) => {
            SetUsername(e.target.value);
          }}
        />
      </Box>
      <Box textAlign={"center"} w={"full"} px={"1.875rem"}>
        <Button
          overflow={"hidden"}
          textAlign={"center"}
          mt={"5.375rem"}
          mb={"4rem"}
          onClick={onSubmit}
          bg={"linear-gradient(99deg, #4960F9 3.83%, #1433FF 81.81%)"}
          p={"18px 24px"}
          borderRadius={"28px"}
          w={"full"}
          pos={"relative"}
          color={"#FFF"}
          fontSize={"20px"}
        >
          <Box pos={"absolute"} top={0} right={0}>
            {Ellipse_4}
          </Box>
          <Box pos={"absolute"} bottom={0} left={0}>
            {Ellipse_5}
          </Box>
          <Box></Box>
          Get OTP
        </Button>
      </Box>
    </Flex>
  );
};
export default OtpVerification;
