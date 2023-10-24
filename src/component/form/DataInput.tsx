import { Box, BoxProps, Input } from "@chakra-ui/react";

interface Interface extends BoxProps {
  reset?: any;
  title?: string;
   type?: string;
  placeholder?: string;
  onchange?: () => void;
}

const DataInput = ({
  type,
  onchange,
  title,
  placeholder,
  ...reset
}: Interface) => {
  return (
    <Box {...reset}>
      <Box
        color={
          type === "error"
            ? "#FD2727"
            : type === "profile"
            ? "#80E0FF"
            : "#B9B9B9"
        }
        fontSize={"14px"}
      >
        {title}
      </Box>
      <Input
        onChange={onchange}
        type="email"
        py={"8px"}
        _focus={{ border: "none" }}
        bg={type === "profile" ? "transparent" : "#FFF"}
        w={"100%"}
        outline={"none"}
        placeholder={placeholder}
        _placeholder={{ color: "#80E0FF" }}
      />
      <Box
        borderBottom={"1px solid"}
        borderColor={type === "profile" ? "#FFF" : "#2743FD"}
      />
    </Box>
  );
};
export default DataInput;
