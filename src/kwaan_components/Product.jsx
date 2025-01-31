import { Flex, Image, Badge, Text } from "@chakra-ui/react";

const Product = ({name, imgSrc, price, productStatus}) => {
  return (
    <Flex direction="column" gap="16px">
      <Image src={imgSrc} alt={`Image of ${name}`} h="400px" bg="#ececee" rounded="12px" />
      <Flex direction="column" gap="4px">
        <Text fontWeight="400" fontSize="16px" color="#000">{name}</Text>
        <Flex gap="24px">
          <Text fontSize="14px" color="#000">{price}</Text>
          <Badge>{productStatus}</Badge>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Product;
