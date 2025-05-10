import { Flex, Box, Heading, Text, Button, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import AddToCart from "@/components/shared/AddToCart";
import { useProduct } from "@/context/Context";

const ProductInfo = () => {
    const { selectedProduct } = useProduct();

    if (!selectedProduct) return null;

    const colors = ["#565D49", "#000000", "#F1B7DA", "#DDCFC0", "#ffffff"];
    const sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];

    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [selectedSize, setSelectedSize] = useState(null);

    return (
        <Box w={{base: "100%", lg: "30%"}} gap={4} px={2} color="black">
            <Flex direction="column" py={4} w={"100%"} gap={3}>
                <Heading fontWeight={"bold"} fontSize={"18px"} letterSpacing={".3px"}>
                    {selectedProduct.title.toUpperCase()}
                </Heading>

                <Heading fontSize="24px" fontWeight="bold">$ {selectedProduct.price}</Heading>

                <Text>
                    {selectedProduct.description}
                </Text>
            </Flex>

            <Flex direction={"column"} gap={3}>
                <Flex alignItems={"center"} gap={3}>
                    <Heading fontSize="md">Color</Heading>
                    <Box
                        bg={selectedColor}
                        w={5}
                        h={5}
                        rounded={"full"}
                        border="1px solid rgba(0, 0, 0, 0.3)"
                    ></Box>
                </Flex>

                <Flex gap={4}>
                    {colors.map((color, index) => (
                        <Box
                            key={index}
                            bg={color}
                            w={5}
                            h={5}
                            rounded={"full"}
                            cursor={"pointer"}
                            border="1px solid rgba(0, 0, 0, 0.3)"
                            onClick={() => setSelectedColor(color)}
                        ></Box>
                    ))}
                </Flex>

                <Flex direction={"column"} gap={2}>
                    <Heading fontSize="md">Size</Heading>
                    <Flex gap={2}>
                        {sizes.map((size, index) => (
                            <Button
                                key={index}
                                size={"sm"}
                                rounded={"lg"}
                                bg={selectedSize === size ? "black" : "white"}
                                color={selectedSize === size ? "white" : "black"}
                                border="1px solid black"
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </Button>
                        ))}
                    </Flex>
                </Flex>

                <Flex gap={2}>
                    <AddToCart size="md" />
                    <Button bg={"white"} color={"black"} border={"2px solid black"}>
                        Add as favourites <Icon as={FaRegHeart} boxSize="18px" />
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
};

export default ProductInfo;
