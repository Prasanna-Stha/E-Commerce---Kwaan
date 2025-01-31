import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Heading, Icon, Button, Text, Grid, GridItem } from "@chakra-ui/react";
import { MdArrowOutward, MdOutlineShoppingBag } from "react-icons/md";

import Product from "./Product";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";

import womenProduct1 from "../assets/woman_wears/umbrella_yellow.png";
import womenProduct2 from "../assets/woman_wears/women_coat_blue.png";
import womenProduct3 from "../assets/woman_wears/women_coat_black.png";

import kidDress1 from "../assets/kids_wears/kid_dress1.png";
import kidDress2 from "../assets/kids_wears/kid_dress2.png";
import kidDress3 from "../assets/kids_wears/kid_dress3.png";

const NewArrival = () => {
    const [selectedCategory, setSelectedCategory] = useState("Men");

    const productsInfo = [
        { name: "ZARA Men Shirt", imgSrc: product1, price: "$42.50", productStatus: "In stock", category: "Men" },
        { name: "Men Half Pant", imgSrc: product2, price: "$42.50", productStatus: "Limited pieces", category: "Men" },
        { name: "Men Oversized Boxy Bomber Jacket", imgSrc: product3, price: "$42.50", productStatus: "In stock", category: "Men" },

        { name: "Women Coat-Blue", imgSrc: womenProduct1, price: "$67", productStatus: "New", category: "Women" },
        { name: "Women Coat-Black", imgSrc: womenProduct2, price: "$70", productStatus: "New", category: "Women" },
        { name: "Women Coat-Blue", imgSrc: womenProduct3, price: "$100", productStatus: "New", category: "Women" },

        { name: "Kids Dress-1", imgSrc: kidDress1, price: "$70", productStatus: "New", category: "Kids" },
        { name: "Kids Dress-2", imgSrc: kidDress2, price: "$100", productStatus: "New", category: "Kids" },
        { name: "Kids Dress-3", imgSrc: kidDress3, price: "$70", productStatus: "New", category: "Kids" },
    ];

    const filteredProducts = selectedCategory ? productsInfo.filter((product) => product.category === selectedCategory) : productsInfo;

    return (
        <Flex direction="column" w="100%" p={["1rem", "1rem", "2rem"]} gap="24px">
            {/* Title & Category Selection */}
            <Flex direction={["column", "row"]} w="100%" justify="space-between" gap={5}>
                <Heading fontSize="2xl" fontWeight="700" color="black">
                    New Arrivals <Icon as={MdArrowOutward} ml="4px" />
                </Heading>

                {/* Category Buttons */}
                <Flex gap="12px">
                    {["Men", "Women", "Kids"].map((category) => (
                        <Button
                            key={category}
                            bg={selectedCategory === category ? "black" : "white"}
                            color={selectedCategory === category ? "white" : "black"}
                            border="1px solid black"
                            rounded="16px"
                            _hover={{ bg: selectedCategory === category ? "gray.800" : "gray.100" }}
                            transition="all 0.3s ease"
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </Flex>
            </Flex>

            {/* Product Grid */}
            <Grid templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={6}>
                {filteredProducts.map((productInfo, index) => (
                    <GridItem key={index}>
                        <Link to="/new_arrival">
                            <Product
                                name={productInfo.name}
                                imgSrc={productInfo.imgSrc}
                                price={productInfo.price}
                                productStatus={productInfo.productStatus}
                            />
                        </Link>
                    </GridItem>
                ))}
            </Grid>

            <Flex direction="column" gap="16px" align="center">
                <Text color="#111111" fontSize="16px" lineHeight="28px" textAlign="center">
                    We offer a wide range of high-quality apparel to suit every style and occasion.
                </Text>
                <Button
                    bg="#1A2332"
                    color="#fff"
                    _hover={{ bg: "#111827" }}
                    px="24px"
                    py="12px"
                    rounded="full"
                    fontSize="16px"
                    fontWeight="600"
                    onClick={() => setSelectedCategory(null)}
                    transition="all 0.3s ease"
                >
                    Browse all collections
                    <Icon as={MdOutlineShoppingBag} ml="8px" />
                </Button>
            </Flex>
        </Flex>
    );
};

export default NewArrival;
