import { Flex, Image, Badge, Text, Icon, Box } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import AddToCart from "./AddToCart";
import { Tooltip } from "@/components/ui/tooltip";
import { product } from "@/@types/products/product";

const Product = ({
  name,
  imgSrc,
  price,
  productStatus,
  titleLength,
  rating,
  addToCart,
}: product) => {
  return (
    <Tooltip content={name} showArrow>
      <Box>
        <Flex
          direction="column"
          gap={3}
          p={{ base: 1, sm: 2, lg: 4 }}
          bg="white"
          rounded={3}
          transition="all 0.1s ease"
          _hover={{
            border: "1px solid rgba(0, 0, 0, 0.07)",
            transform: "scale(1.02)",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
          }}
          h="100%"
          cursor="pointer"
          border="1px solid rgba(0, 0, 0, 0.1)"
        >
          {/* Image Container */}
          <Flex flex="1" align="center" justify="center">
            <Image
              src={imgSrc}
              alt={`Image of ${name}`}
              w="100%"
              aspectRatio="4 / 5"
              objectFit="contain"
              rounded={3}
            />
          </Flex>

          {/* Product Information */}
          <Flex direction="column" justify="space-between" gap={2} h="100%">
            <Flex justify="space-between" align="center">
              <Text fontWeight="600" fontSize="md" color="gray.800">
                {name.length <= titleLength
                  ? name
                  : `${name.slice(0, titleLength)}...`}
              </Text>
              {addToCart && <AddToCart size="xs" />}
            </Flex>

            <Flex justify="space-between" align="center" gap={1}>
              <Text fontSize="md" fontWeight="bold" color="gray.700">
                ${price}
              </Text>
              <Badge w="fit" rounded="2xl" py={1} px={3} fontSize="sm">
                {productStatus}
              </Badge>
            </Flex>

            {/* Product Rating */}
            <Flex align="center">
              <Icon as={AiFillStar} fontSize="20px" color="#FFD700" mr={5} />
              <Text fontSize="sm" color="gray.600">
                {rating?.rate ?? "N/A"} ({rating?.count ?? 0} reviews)
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Tooltip>
  );
};

export default Product;
