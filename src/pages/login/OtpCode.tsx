import { Box, Flex, Input, useToast,Button } from "@chakra-ui/react";
import { Ellipse_4, Ellipse_5, OTP } from "../../assets/Svg";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const OtpCode = () => {
  const [code, SetCode]:any = useState("    ");
  const { state } = useLocation();

  const navigate = useNavigate();
  

  const onSubmit = () => {
    fetch("https://api-arshida.iran.liara.run/v1/auth/check-otp", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ field: state.field, code }),
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
          toast({
            duration: 3000,
            status: "success",
            title: "halidi da",
            isClosable: false,
          });
        }
      });
  };
  const toast = useToast();

  useEffect(()=>{

  },[])
 
   const replaceCharacter = (string:any, index:any, replacement:any) => {
    return (
      string.slice(0, index) +
      replacement +
      string.slice(index + replacement.length)
    );
  }
  console.log(code);
  
  return (
    <Flex className="fade" direction={"column"} align={"center"}>
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
            onChange={(e)=>{
              let _code:any = code
              _code = replaceCharacter(_code,0,e.target.value[0])
            
              SetCode(_code)
            }}
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
            onChange={(e)=>{
           
              let _code:any = code
              _code = replaceCharacter(_code,1,e.target.value[0])
              SetCode(_code)
            }}
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
            onChange={(e)=>{
              let _code:any = code
              _code = replaceCharacter(_code,2,e.target.value[0])
              SetCode(_code)
            }}
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
            onChange={(e)=>{
              let _code:any = code
              _code = replaceCharacter(_code,3,e.target.value[0])
              SetCode(_code)
            }}
          />
        </Flex>
      </Flex>

      <Flex gap={3} mt={"3.75rem"} align={"center"}>
        <Box color={"#B9B9B9"} fontSize={"14px"} fontWeight={500}>
          Didn’t you receive the OTP?{" "}
        </Box>
        <Box color={"#2743FD"} fontSize={"16px"} fontWeight={600}>
          Resend OTP
        </Box>
      </Flex>
      <Box px={"30px"} w={"full"}>
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
          Verify
        </Button>
      </Box>
    </Flex>
  );
};
export default OtpCode;
