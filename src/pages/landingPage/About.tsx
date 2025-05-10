import img from "../../assets/login_signup_jmg.png"
import { Stack, Box, Image, Flex, Text, Heading } from "@chakra-ui/react"
import icon1 from "../../assets/Icon1.png"
import icon2 from "../../assets/Icon2.png"
import icon3 from "../../assets/Icon3.png"
import icon4 from "../../assets/Icon4.png"

const About = () => {
    const aboutInfo = [
        { imgSrc: icon4, title: "Unmatched Quality", content: "We use the finest fabrics and precise stitching for clothing that looks great, lasts long, and feels comfortable." },
        { imgSrc: icon2, title: "Exclusive Design", content: "We use the finest fabrics and precise stitching for clothing that looks great, lasts long, and feels comfortable." },
        { imgSrc: icon3, title: "Sustainable Fashion", content: "We use the finest fabrics and precise stitching for clothing that looks great, lasts long, and feels comfortable." },
        { imgSrc: icon1, title: "Affordability Without Compromise", content: "We use the finest fabrics and precise stitching for clothing that looks great, lasts long, and feels comfortable." },
    ]
    return (
        <>
            <Stack w="100%" h="fit-content" bg="#f5f5f5" padding="1rem 0">
                <Flex w="80%" justify="space-around" align="flex-end" m="auto">
                    <Box w="30%" display={{base: "none", sm: "none", md:"none", lg: "block"}}>
                        <Image src={img} w="100%" />
                    </Box>

                    <Flex w={{sm: "90%", md: "80%", lg: "50%"}} direction="column" gap="16px">
                        <Heading color="#111111" fontWeight="700" fontSize={{sm: "1.5rem", md: "1.7rem", lg:"xl"}}>Discover the Difference</Heading>
                        <Text fontSize="1rem" color="#111111" opacity=".8">At Kwaan, we believe that fashion is more than just clothing; it’s a statement, a lifestyle, and an expression of individuality. Our commitment to quality, style, and sustainability sets us apart, making every piece you purchase a unique addition to your wardrobe.</Text>
                        <Stack w="100%">
                            {aboutInfo.map((info, index) => (
                                <Flex key={index} w="100%" gap="1rem" align="center">
                                    <Box w="13%">
                                        <Image src={info.imgSrc} w="100%" />
                                    </Box>
                                    <Flex direction="column">
                                        <Heading fontWeight="600" fontSize="18px" color="#111111">{info.title}</Heading>
                                        <Text fontSize="14px" color="#111111" opacity=".8">{info.content}</Text>
                                    </Flex>
                                </Flex>
                            ))}
                        </Stack>
                    </Flex>
                </Flex>
            </Stack>
        </>
    )
}

export default About