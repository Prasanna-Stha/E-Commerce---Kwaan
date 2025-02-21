import { useEffect, useState } from "react";

import Product from "../commonComponents/Product";

import { Link } from "react-router-dom";

import { Flex, Heading, Icon, Button, Text, Grid, GridItem } from "@chakra-ui/react";
import { MdArrowOutward, MdOutlineShoppingBag } from "react-icons/md";

import { useProduct } from "../../context/Context";


const PopularProducts = () => {
    const { setSelectedProduct } = useProduct();
    const [products, setProducts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("Men");

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch((error) => console.error("Error while fetching products...", error))
    }, [])

    const filteredProducts = products.filter((product) => {
        if (selectedCategory === "Men") return product.category.includes("men")
        if (selectedCategory === "Women") return product.category.includes("women")
        if (selectedCategory === "Kids") return product.category.includes("kid")
    })

    return (
        <Flex direction="column" w="100%" p={["1rem", "1rem", "2rem"]} gap="24px">
            {/* Title & Category Selection */}
            <Flex direction={["column", "row"]} w="100%" justify="space-between" gap={5}>
                <Heading fontSize="2xl" fontWeight="700" color="black">
                    Popular Products <Icon as={MdArrowOutward} ml="4px" />
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
            <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" maxW="1200px" gap={6} mx="auto" w="100%" px={["1rem", "2rem"]}>
                {(filteredProducts.length > 0) ?
                    filteredProducts.map((filteredProduct, index) => (
                        <GridItem key={index} p={3}>
                            <Link to={`/${filteredProduct.title}/${filteredProduct.id}`} onClick={() => setSelectedProduct(filteredProduct)}>
                                <Product
                                    name={filteredProduct.title}
                                    imgSrc={filteredProduct.image}
                                    price={filteredProduct.price}
                                    productStatus="Popular"
                                    titleLength={40}
                                    rating={filteredProduct.rating}
                                />
                            </Link>
                        </GridItem>
                    ))
                    :
                    <Heading color="red.500" textAlign="center" >
                        No popular products for the selected category at the moment. Please check out our other products....
                    </Heading>
                }
            </Grid>

            <Flex direction="column" gap="16px" align="center">
                <Text color="#111111" fontSize="16px" lineHeight="28px" textAlign="center">
                    We offer a wide range of high-quality apparel to suit every style and occasion.
                </Text>
                <Button bg="#1A2332" color="#fff" _hover={{ bg: "#111827" }} px="24px" py="12px" rounded="full" fontSize="16px" fontWeight="600" onClick={() => setSelectedCategory(null)} transition="all 0.3s ease">
                    Browse all collections
                    <Icon as={MdOutlineShoppingBag} ml="8px" />
                </Button>
            </Flex>
        </Flex >
    );
};

export default PopularProducts;