import { Box, BoxProps, Flex, Input } from "@chakra-ui/react";
import Button from "../../component/form/Button";
import SighInLayout from "../../layouts/MainLayout";

interface Interface extends BoxProps {
  reset?:any
  type?:string
  error?:string
}

const Login = ({type,error,...reset}:Interface) => {
  return (
    <SighInLayout >
      <Box px={"30px"} {...reset}>
        <Box color={"#3A3A3A"} fontSize={"28px"} fontWeight={700}>
        {type === "signIn" ? "Sign In" : "Sign Up"}
        </Box>
        <Flex mt={"56px"}  direction={"column"} gap={"24px"}>
          <Box >
            <Box color={error ? "#FD2727" :"#B9B9B9"} fontSize={"14px"}>
              
              Email Address
            </Box>
            <Input
              type="email"
              py={"10px"}
              _focus={{ border: "none" }}
              bg={"#FFF"}
              borderBottom={"1px solid #2743FD"}
              w={"100%"}
            outline={"none"}
            />
            {error && 
            <Box fontSize={"13"} fontWeight={300} color={"#FD2727"}>The email address entered is invalid</Box>
            }
          </Box>
          <Box>
            <Box color={"#B9B9B9"} fontSize={"14px"}>
              Password
            </Box>
            <Input
              type="password"
              py={"10px"}
              _focus={{ border: "none" }}
              bg={"#FFF"}
              borderBottom={"1px solid #2743FD"}
              w={"100%"}
            outline={"none"}
            />
          </Box>
          {type === "signUp" && 
          <Box>
            <Box color={"#B9B9B9"} fontSize={"14px"}>
              Confirm Password
            </Box>
            <Input
              type="password"
              py={"10px"}
              _focus={{ border: "none" }}
              bg={"#FFF"}
              borderBottom={"1px solid #2743FD"}
              w={"100%"}
            outline={"none"}
              />
          </Box>
            }
          <Box color={"#2B47FC"} fontSize={"16px"}>
            Forgot Password?
          </Box>
        </Flex>
        <Button  mb={"56px"} mt={"68px"} w={"100%"}>{type === "signIn" ? "Sign In" : "Sign Up"}</Button>
      </Box>
    </SighInLayout>
  );
};
export default Login;
