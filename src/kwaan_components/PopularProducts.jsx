import { Box, Flex, Heading, Icon, Button, Text } from "@chakra-ui/react"
import { MdArrowOutward, MdOutlineShoppingBag } from "react-icons/md";
import Product from "./Product"
import product4 from "../assets/product4.png"
import product5 from "../assets/product5.png"
import product6 from "../assets/product6.png"

const PopularProducts = () => {
    const productsInfo = [
        { name: "ZARA Men Shirt", imgSrc: product4, price: "$42.50", productStatus: "In a stock" },
        { name: "Men Half Pant", imgSrc: product5,  price: "$42.50", productStatus: "Limited pieces" },
        { name: "Men Oversized Boxy  Bonded Scuba Bomber Jacket", imgSrc: product6,  price: "$42.50", productStatus: "In a stock" }
    ]
    return (
        <>
            <Flex direction="column" w="100%" p={["1rem", "1rem", "2rem"]} gap="16px">
                <Flex direction={["column", "column", "row"]} w="100%" justify="space-between" gap={4}>
                    <Heading fontSize="1.7rem" fontWeight="700" color="black">Popular Products <Icon as={MdArrowOutward} /></Heading>
                    <Flex gap="16px">
                        <Button bg="black" color="white" w="fit-content" rounded="16px">Men</Button>
                        <Button bg="white" color="black" w="fit-content" rounded="16px">Women</Button>
                        <Button bg="white" color="black" w="fit-content" rounded="16px">Kids</Button>
                    </Flex>
                </Flex>

                <Flex gap="1rem" direction={["column", "row"]}>
                    {productsInfo.map((productInfo, index) => (
                        <Box key={index} w="100%">
                            <Product name={productInfo.name} imgSrc={productInfo.imgSrc} price={productInfo.price} productStatus={productInfo.productStatus} />
                        </Box>
                    ))}
                </Flex>

                <Flex direction="column" gap="16px" align="center" rounded="lg">
                    <Text color="#111111" fontSize="16px" lineHeight="28px" textAlign="center">We offer a wide range of high-quality apparel to suit every style and occasion.</Text>
                    <Button bg="#1A2332" color="#fff" w="fit">
                        Browse all collections
                        <Icon as={MdOutlineShoppingBag} />
                    </Button>
                </Flex>
            </Flex>
        </>
    )
}

export default PopularProducts