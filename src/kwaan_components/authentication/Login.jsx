import { Flex, Box, Text, Heading, HStack, Input, Image, Button, Icon } from "@chakra-ui/react"
import { Checkbox } from "@/components/ui/checkbox"
import { InputGroup } from "@/components/ui/input-group"
import { LuMail, LuKey } from "react-icons/lu"
import { FaCartShopping, FaFacebookF, FaGoogle } from "react-icons/fa6";
import login_signup_img from "../../assets/login_signup_jmg.png"

import { Link } from "react-router-dom";

import { useState } from "react"

const Login = () => {
    const [signIn, setSignIn] = useState(true)

    document.title = "kwaan login"

    return (
        <>
            <Flex w="full" h="100vh" justify="center" align="center" bg="white" direction={["column", "row"]}>

                {/* left side i.e. image and text */}
                <Flex w={["50%"]} display={["none", "none", "none", "flex"]} h="full" bg="#edf2f4" borderTopRightRadius="80px" borderBottomRightRadius="80px" direction="column">
                    <Flex direction="column" align="center" justify={["flex-start", "flex-end"]} w={["100%", "90%", "70%"]} h="100%" margin="auto" position="relative" >

                        <Flex direction="column" gap="12px" justify="center" align="center" py="24px">
                            <Heading fontSize={["24px", "28px", "32px"]} lineHeight="43.85px" color="#1f2937" fontWeight="700">Wear your Confidence</Heading>
                            <Text fontSize="16px" textAlign="center" lineHeight="24px" color="#4b5563" fontWeight="400">Discover outfits that empower you. Our collection is designed to boost your confidence and style, making you feel unstoppable every day.</Text>
                        </Flex>

                        <Box w="60%">
                            <Image src={login_signup_img} alt="login_signup_img" w="100%" />
                        </Box>
                    </Flex>
                </Flex>

                {/* right side i.e. login form */}
                <Box w={["90%", "90%", "90%", "50%"]} h="fit-content" position="relative">
                    {/* container of login form */}
                    <Flex direction="column" gap="16px" w={["full", "70%"]} position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" >

                        <Link to="/">
                            <Heading color="#111111" fontSize="40px" lineHeight="58.46px" fontWeight="700" letterSpacing="6%">KWAAN.</Heading>
                        </Link>
                        <Flex direction="column" gap="16px" w="100%" padding="32px" borderRadius="20px" boxShadow="0 4px 10px rgba(0, 0, 0, 0.2)">

                            <Flex direction="column" gap="16px">
                                <Flex color="#111111" align="center" gap="12px">
                                    <Heading fontWeight="700" fontSize="28px" lineHeight="44px">
                                        {signIn ? "Sign in" : "Sign up"}</Heading>
                                    <Icon as={FaCartShopping} boxSize="24px" />
                                </Flex>
                                <Text fontWeight="400" color="#42627A" fontSize="16px" lineHeight="20px">Please enter your correct information</Text>
                            </Flex>

                            <form action="#">
                                <Flex direction="column" gap="16px">
                                    {/* sign in form */}
                                    <Flex direction="column" gap="20px">
                                        <Flex direction="column" gap="12px">
                                            <HStack gap="10" w="full">
                                                <InputGroup flex="1" startElement={<LuMail />}>
                                                    <Input type="email" bgColor="#f0f4f8" color="gray.700" padding="12px" borderRadius="10px" border="none" placeholder="Mail" />
                                                </InputGroup>
                                            </HStack>
                                            <HStack gap="10" w="full">
                                                <InputGroup flex="1" startElement={<LuKey />}>
                                                    <Input type="password" bgColor="#f0f4f8" color="gray.700" padding="12px" borderRadius="10px" border="none" placeholder="Password" />
                                                </InputGroup>
                                            </HStack>
                                        </Flex>
                                        <Flex justify="space-between" display={signIn ? "flex" : "none"}>
                                            <Checkbox size="sm" color="#363944" fontSize={["12px", "16px"]} fontWeight="400" lineHeight="16px" cursor="pointer">Remember me</Checkbox>
                                            <Link href="#" color="#07468A" fontSize={["12px", "16px"]} lineHeight="16px" fontWeight="400">forgot password?</Link>
                                        </Flex>
                                        <Button bgColor="#111111" color="white" padding="12px" borderRadius="10px" height="44px">Sign in</Button>
                                    </Flex>

                                    <Flex justify="flex-end" align="center" gap="24px" color="black">
                                        <Text>Or Sign up with</Text>
                                        <Flex gap="16px">
                                            <Icon as={FaFacebookF} boxSize="18px" />
                                            <Icon as={FaGoogle} boxSize="18px" />
                                        </Flex>

                                    </Flex>
                                    <Flex justify={["center", "flex-end"]} align="center" color="black" gap="8px" >
                                        <Text fontSize={["14px", "18px"]}>Don't you have an account?</Text>
                                        <Link to="/signup">Sign up</Link>
                                    </Flex>
                                </Flex>
                            </form>
                        </Flex>
                    </Flex >
                </Box >
            </Flex >
        </>
    )
}

export default Login