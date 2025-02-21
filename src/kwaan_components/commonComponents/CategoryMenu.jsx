import { useEffect, useState } from "react";
import { Stack, Heading, Text, Flex } from "@chakra-ui/react";

const CategoryMenu = ({ title, setSelectedCategory }) => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((err) => console.error("Error fetching categories:", err));
    }, []);

    const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    return (
        <Stack p={6} gap={4} w={{ base: "100%", lg: "25%" }}>
            <Heading color="black" mb={4} fontWeight="700" fontSize={"24px"}>{title}</Heading>
            {categories.map((category, index) => (
                <Flex key={index} px={3} py={1} borderRadius="8px" bg="transparent" color="black" cursor="pointer">
                    <Text fontWeight="bold" onClick={()=>setSelectedCategory(category)}>{capitalizeFirstLetter(category)}</Text>
                </Flex>
            ))}
        </Stack>
    );
};

export default CategoryMenu;
