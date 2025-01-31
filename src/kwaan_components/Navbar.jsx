import { Flex, Box, Text, Heading, Button, Icon } from "@chakra-ui/react"
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [verticalNav, setVerticalNav]=useState(false)
    const showNav = () => {
        setVerticalNav(!verticalNav)
    }
    const offers = [
        "GET 20% OFF ON FIRST MEMBERSHIP",
        "FREE SHIPPING FOR ORDERS ABOVE $50",
        "NEW ARRIVALS DROPPING SOON"
    ]
    return (
        <>
            <Flex height="58px" display={["none", "none", "flex"]} align="center" justify="space-between" px="150px" bg="#111" color="white">
                {offers.map((offer, index) => (
                    <Flex key={index} direction="column" justify="center" w="100%" h="100%" borderRight={(index<offers.length-1)?"1px solid white":"none"}>
                        <Text textAlign="center">{offer}</Text>
                    </Flex>
                ))}
            </Flex>

            {/* navbar start from here */}
            <Flex align="center" w="100vw" h="58px" bg="white" position="sticky" top="0" zIndex="10" boxShadow="0px 4px 12px rgba(0, 0, 0, 0.08)">
                <Flex w="80%" color="#111111" justify="space-between" align="center" m="auto">
                    <Box>
                        <Heading fontSize="28px" fontWeight="700">KWAAN.</Heading>
                    </Box>

                    {/* navigation elements */}
                    <Flex w="30%" display={["none", "none", "none", "flex"]} justify="space-between">
                        <Box><NavLink to="/">HOME</NavLink></Box>
                        <Box><Text>MEN</Text></Box>
                        <Box><Text>WOMEN</Text></Box>
                        <Box><Text>KIDS</Text></Box>
                    </Flex>

                    <Flex w="fit-content" display={["flex"]} justify="space-between" align="center" gap="32px" >
                        <Flex gap="16px" align="center">
                            <Icon as={IoMdSearch} boxSize="22px" />
                            <Icon as={FaRegHeart} boxSize="18px" />
                            <Icon as={MdOutlineShoppingBag} boxSize="20px" />
                        </Flex>

                        {/* login/signup button */}
                        <Flex border="1px solid grey" p="4px" rounded="md" gap="8px" display={["none", "none", "none", "flex"]}>
                            <Link to="/authentication">
                                <Button bg="black" color="white">LOG IN</Button>
                            </Link>
                            <Link to="/authentication">
                                <Button bg="white" color="black">SIGN UP</Button>
                            </Link>
                        </Flex>

                        {/* hamburger icon */}
                        <Flex direction="column" display={["flex", "flex", "flex", "none"]} gap="4px" onClick={showNav}>
                            <Box w="24px" h="4px" bg="black" rounded="16px"></Box>
                            <Box w="24px" h="4px" bg="black" rounded="16px"></Box>
                            <Box w="24px" h="4px" bg="black" rounded="16px"></Box>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

            {verticalNav && (
                    <Flex direction="column" bg="rgba(0, 0, 0, .7)" position="absolute" top="58px" left={verticalNav?"0":"-100%"} w="50vw" h="100vh" zIndex="10" p="4" boxShadow="md" transition=".5s linear">
                    <Box><NavLink to="/">HOME</NavLink></Box>
                    <Box><Text>MEN</Text></Box>
                    <Box><Text>WOMEN</Text></Box>
                    <Box><Text>KIDS</Text></Box>
                </Flex>
            )}
        </>
    )
}

export default Navbar