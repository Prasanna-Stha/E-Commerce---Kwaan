import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { Flex, Heading, Grid, GridItem, Button, Icon } from "@chakra-ui/react";
import { MdArrowOutward } from "react-icons/md";
import { useProduct } from "../../context/Context";
import { useProductList } from "@/services/product";
import Product from "@/components/shared/Product";
import { ProductType } from "@/@types/products/productDisplay";

const NewArrival = () => {
  const { setSelectedProduct } = useProduct();
  const [selectedCategory, setSelectedCategory] = useState("Men");

  const { data: response, isLoading, isError, error } = useProductList();

  const products = response ?? [];

  const filteredProducts = useMemo(() => {
    return products.filter(({ category }) => {
      if (!category) return false;
      const cat = category.toLowerCase();
      return selectedCategory === "Men"
        ? cat.includes("men")
        : selectedCategory === "Women"
        ? cat.includes("women")
        : selectedCategory === "Kids"
        ? cat.includes("kid")
        : true;
    });
  }, [products, selectedCategory]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <Flex direction="column" w="100%" p="2rem" mb={6}>
      {/* Title & Category Selection */}
      <Flex
        direction={["column", "row"]}
        w="100%"
        justify="space-between"
        gap={5}
      >
        <Heading fontSize="2xl" fontWeight="700" color="black">
          New Arrivals <Icon as={MdArrowOutward} ml="4px" />
        </Heading>

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
              hello hello {category}
            </Button>
          ))}
        </Flex>
      </Flex>

      {/* Product Grid */}
      <Grid
        templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
        gap={6}
        mx="auto"
        w="100%"
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product: ProductType) => (
            <GridItem key={product.id} p={3}>
              <Link
                to={`/product/${product.id}`}
                onClick={() => setSelectedProduct(product)}
              >
                <Product
                  name={product.title}
                  imgSrc={product.image}
                  price={product.price}
                  productStatus="New"
                  rating={product.rating.count}
                  addToCart={false}
                  titleLength={30}
                />
              </Link>
            </GridItem>
          ))
        ) : (
          <Heading color="red.500" textAlign="center" my={5}>
            No new arrivals for the selected category at the moment. Please
            check out our other products.
          </Heading>
        )}
      </Grid>
    </Flex>
  );
};

export default NewArrival;
