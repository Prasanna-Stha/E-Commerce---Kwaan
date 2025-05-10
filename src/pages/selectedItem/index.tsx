import { Box, Flex } from "@chakra-ui/react";
import ItemShowcase from "./ItemShowcase";
import ProductInfo from "./ProductInfo";
import { useEffect } from "react";

const SelectedProduct = () => {
  useEffect(() => {
    document.title = "Kwaan | Selected products";
  }, []);

  return (
    <>
      <Box w="100%" bg={"white"}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          w="80%"
          mx="auto"
          my={3}
          gap={1}
        >
          <ItemShowcase />
          <ProductInfo />
        </Flex>
      </Box>
    </>
  );
};

export default SelectedProduct;
