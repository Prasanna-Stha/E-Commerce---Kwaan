import { Flex, Box, Text, Button, Heading, Image, Icon } from "@chakra-ui/react";
import PopularProducts from "./PopularProducts";
import About from "./About";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import { RiArrowRightLine } from "react-icons/ri";
import { GoDash } from "react-icons/go";
import { MdArrowOutward, MdOutlineShoppingBag } from "react-icons/md";
import foregroundImg from "../assets/foreground_img.png";
import background from "../assets/background.mp4";
import NewArrival from "./NewArrival";

const HomePage = () => {
    const fashions = [
        "CASUAL WEAR",
        "FORMAL ATTIRE",
        "SPORTSWEAR",
        "ACCESSORIES",
        "LATEST FASHION TRENDS",
    ];
    const letters = ["K", "W", "A", "A", "N"];

    return (
        <>
            <Box w="100vw" bg="#111">
                {/* Hero Section */}
                <Flex
                    w="100%"
                    h={["calc(100vh - 58px)", "calc(100vh - 58px)", "calc(100vh - 116px)"]}
                    overflow="hidden"
                    direction="column"
                    justify="center"
                    align="center"
                >
                    <Box position="relative" w="100%" h="100%">
                        <video
                            w="100%"
                            h="100%"
                            autoPlay
                            loop
                            muted
                            style={{ opacity: ".5" }}
                            playsInline
                        >
                            <source src={background} />
                        </video>
                        <Flex
                            w="100%"
                            direction="column"
                            align="center"
                            position="absolute"
                            top="50%"
                            left="50%"
                            transform="translate(-50%, -50%)"
                            gap="6"
                        >
                            <Heading
                                w="100%"
                                color="#F4F4F4"
                                fontSize={["36px", "48px", "52px", "58px"]}
                                fontWeight="700"
                                lineHeight={["48px", "64px"]}
                                letterSpacing="12%"
                                textAlign="center"
                            >
                                BEYOND ORDINARY FASHION
                            </Heading>
                            <Text w={["80%", "80%", "60%", "50%"]} textAlign="center" color="white">
                                Discover extraordinary fashion with unique, trend-defying designs for those
                                who love to stand out.
                            </Text>
                            <Button color="white" bg="transparent" border="1px solid white" rounded="lg" mt={6}>
                                Explore More <RiArrowRightLine />
                            </Button>
                        </Flex>
                    </Box>
                </Flex>

                <hr border="2px solid white" />

                {/* Fashion Categories */}
                <Flex direction="column" w="100%" position="relative">
                    <Flex w={["100%", "100%", "80%", "70%"]} m="auto" paddingTop={16} paddingLeft={{base: 8}} direction="column" gap="32px">
                        <Flex w="100%" gap="24px" wrap="wrap">
                            {fashions.map((fashion, index) => (
                                <Heading
                                    fontSize={["16px", "20px", "24px", "30px"]}
                                    display="flex"
                                    align="center"
                                    marginRight="12px"
                                    key={index}
                                    color="#fff"
                                >
                                    <Icon as={GoDash} display={index === 0 ? "none" : "block"} /> &nbsp; {fashion} &nbsp;
                                    <Icon as={MdArrowOutward} boxSize="20px" />
                                </Heading>
                            ))}
                        </Flex>
                        <Text w={["80%", "80%", "60%", "50%"]} fontSize={["14px", "16px"]} letterSpacing=".6px" color="white">
                            Discover the finest selection of clothing at unbeatable prices. We offer a wide range of high-quality
                            apparel to suit every style and occasion. Experience the perfect blend of affordability and excellence with our
                            premium clothing collection.
                        </Text>
                    </Flex>

                    {/* Letters & Foreground Image */}
                    <Flex w="100%" h="400px" overflow="hidden" m="auto" position="relative">
                        {/* Letters Overlay */}
                        <Flex
                            w="70%"
                            justify="space-around"
                            align="center"
                            position="absolute"
                            top="50%"
                            left="50%"
                            transform="translate(-50%, -50%)"
                            zIndex={1}
                        >
                            {letters.map((letter, index) => (
                                <Heading
                                    key={index}
                                    fontWeight="600"
                                    lineHeight="144px"
                                    fontSize={["48px", "60px", "72px", "96px"]}
                                    color="#fff"
                                    opacity=".34"
                                    textAlign="center"
                                >
                                    {letter}
                                </Heading>
                            ))}
                        </Flex>

                        {/* Foreground Image */}
                        <Image
                            src={foregroundImg}
                            position="absolute"
                            top="50%"
                            left="50%"
                            transform="translate(-50%, -50%)"
                            w={["90%", "80%", "70%", "35%"]}
                            zIndex={2}
                        />
                    </Flex>


                    {/* Call to Action */}
                    <Flex direction="column" w="400px" position="absolute" right="16px" bottom="16px" gap="16px">
                        <Text color="white">
                            We offer a wide range of high-quality apparel to suit every style and occasion.
                        </Text>
                        <Button w="fit-content" rounded="16px" colorScheme="teal" rightIcon={<MdOutlineShoppingBag />}>
                            Browse Collections
                        </Button>
                    </Flex>
                </Flex>

                <hr border="2px solid white" />

                {/* New Arrivals */}
                <Flex w="100%" bg="#fff" py="40px">
                    <Flex w="80%" m="auto">
                        <NewArrival />
                    </Flex>
                </Flex>

                {/* Popular Products */}
                <Flex w="100%" bg="#fff">
                    <Flex w="80%" m="auto">
                        <PopularProducts />
                    </Flex>
                </Flex>

                {/* About Section */}
                <Box>
                    <About />
                </Box>

                {/* Testimonial Section */}
                <Testimonial />

                {/* Footer */}
                <Footer />
            </Box>
        </>
    );
};

export default HomePage;
