import {
  Image,
  Grid,
  GridItem,
  Box,
  Flex,
  Text,
  Heading,
} from "@chakra-ui/react";
import { useProduct } from "../../context/Context";
import { Link } from "react-router-dom";
import { useProductList } from "@/services/product";
import { ProductType } from "@/@types/products/productDisplay";

const ItemShowcase = () => {
  const { selectedProduct, setSelectedProduct } = useProduct();

  const { data: res } = useProductList();

  const recommendedProduct = res?.filter(
    (item: ProductType) => item.id !== selectedProduct?.id
  );

  if (!selectedProduct) return null;

  return (
    <Flex direction="column" w={{ base: "100%", lg: "50%" }} p={5}>
      {/* Large Image Display */}
      <Grid w="100%" p={5} rounded={4} border={"2px solid rgba(0, 0, 0, 0.05)"}>
        <GridItem>
          <Flex
            direction="column"
            w="100%"
            maxH="50vh"
            mb={3}
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.title}
              w="100%"
              maxH="50vh"
              objectFit="contain"
              borderRadius="8px"
            />
          </Flex>
          <Heading color="#111">{selectedProduct.title}</Heading>
        </GridItem>
      </Grid>

      <Text textAlign="left" fontSize="18px" fontWeight="bold" mt={6} color="#111">
        Recommended Products
      </Text>

      <Box
        mt={6}
        w="100%"
        overflowX="auto"
        overflowY="hidden"
        css={{
          "&::-webkit-scrollbar": { width: "15px", height: "5px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "32px",
          },
        }}
      >
        <Flex w="max-content">
          {recommendedProduct.map((product: ProductType) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <Box
                w="150px"
                cursor="pointer"
                onClick={() => setSelectedProduct(product)}
                p={2}
                _hover={{ transform: "scale(1.05)" }}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  w="full"
                  h="100px"
                  objectFit="contain"
                  borderRadius="6px"
                />
                <Text w="full" lineClamp="2">
                  {product.title}
                </Text>
              </Box>
            </Link>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default ItemShowcase;
