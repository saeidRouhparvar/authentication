import { Box, Flex } from "@chakra-ui/react"
import { MainLogo } from "../../assets/Svg"
import {useNavigate} from 'react-router-dom'

const Welcome = () => {

    const navigate = useNavigate()

    setTimeout(() => {
        navigate('/otp')
    },3000)

    return (
        <Flex justify={"center"} mt={"50vh"}>{MainLogo}</Flex>
    )
}
export default Welcome