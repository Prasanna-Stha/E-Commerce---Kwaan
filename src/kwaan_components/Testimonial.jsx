import { Box, Heading, Flex, Text, Icon, Image, Stack } from "@chakra-ui/react"
import { FaRegStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import user from "../assets/userReview.png"
const Testimonial = () => {
    return (
        <>
            <Box w="100%" bg="#fff" p={6}>
                <Flex justify="center" align="center" w="80%" m="auto">
                    <Icon as={FaArrowLeft} boxSize="5" color="black" />
                    <Flex direction="column" gap="6" w={["100%", "60%"]} m="auto">
                        <Heading w="100%" fontWeight="700" fontSize={["28px", "30px"]} textAlign="center" color="#111111">Customer Preview</Heading>
                        {/* rating */}
                        <Flex m="auto" gap="1">
                            <Icon as={FaRegStar} color={"blackAlpha.700"} boxSize="6" />
                            <Icon as={FaRegStar} color={"blackAlpha.700"} boxSize="6" />
                            <Icon as={FaRegStar} color={"blackAlpha.700"} boxSize="6" />
                            <Icon as={FaRegStar} color={"blackAlpha.700"} boxSize="6" />
                            <Icon as={FaRegStar} color={"blackAlpha.700"} boxSize="6" />
                        </Flex>
                        {/* review */}
                        <Text color={"#111111"} textAlign="center">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam fugiat illo sint officia pariatur quaerat laudantium in vitae nisi voluptatem, possimus necessitatibus soluta consequuntur aliquam itaque recusandae incidunt, veniam aliquid.
                        </Text>
                        <Flex w="fit" gap={4} align="center" m="auto">
                            <Image w={20} h={20} src={user} rounded="100%" bg="blue.800" />
                            <Stack>
                                <Heading color="#111" fontWeight="700">Monika Gurung</Heading>
                                <Text color="#111" fontWeight="400" fontSize="4">Employee, Company</Text>
                            </Stack>
                        </Flex>
                    </Flex>
                    <Icon as={FaArrowRight} boxSize="5" color="black" />
                </Flex>
            </Box>
        </>
    )
}

export default Testimonial