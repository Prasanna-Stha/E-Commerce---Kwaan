import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Flex, Heading, Grid, GridItem, Button, Icon } from "@chakra-ui/react";
import { useProduct } from "../../context/Context";
import Product from "../commonComponents/Product";
import { MdArrowOutward } from "react-icons/md";

const NewArrival = () => {
  const { setSelectedProduct } = useProduct();
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Men");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=17")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "Men") return product.category.includes("men");
    if (selectedCategory === "Women") return product.category.includes("women");
    if (selectedCategory === "Kids") return product.category.includes("kid");
    return true;
  });

  return (
    <Flex direction="column" w="100%" p="2rem" mb={6}>
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
              _hover={{
                bg: selectedCategory === category ? "gray.800" : "gray.100",
              }}
              transition="all 0.3s ease"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </Flex>
      </Flex>

      {/* Product Grid */}
      <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6} mx="auto" w="100%">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <GridItem key={product.id} p={3}>
              <Link to={`/${product.title}/${product.id}`} onClick={() => setSelectedProduct(product)}>
                <Product
                  name={product.title}
                  imgSrc={product.image}
                  price={product.price}
                  productStatus="New"
                  rating={product.rating}
                  addToCart={false}
                  titleLength={30}
                />
              </Link>
            </GridItem>
          ))
        ) : (
          <Heading color="red.500" textAlign="center" my={5}>
            No new arrivals for the selected category at the moment. Please check out our other products.
          </Heading>
        )}
      </Grid>
    </Flex>
  );
};

export default NewArrival;
