import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface SearchResultsProps {
  results: any[];
  setSelectedProduct: (product: any) => void;
  clearResults: () => void;
}

export const SearchResult = ({ results, setSelectedProduct, clearResults }: SearchResultsProps) => {
  if (results.length === 0) return null;

  return (
    <Box
      position="absolute"
      top="120px"
      left="50%"
      transform="translateX(-50%)"
      bg="white"
      w="50%"
      boxShadow="md"
      p="3"
      zIndex="10"
      maxH="300px"
      overflowY="auto"
    >
      <Heading size="sm" mb="3">Search Results</Heading>
      <Flex direction="column">
        {results.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            onClick={() => {
              setSelectedProduct(product);
              clearResults();
            }}
          >
            <Flex gap={4} mb={3}>
              <Image src={product.image} h="40px" />
              <Text fontWeight="semibold" fontSize="sm" color="gray.800">{product.title}</Text>
            </Flex>
          </Link>
        ))}
      </Flex>
    </Box>
  );
};
