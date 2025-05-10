import { Flex, Text } from "@chakra-ui/react";

const offers = [
  "GET 20% OFF ON FIRST MEMBERSHIP",
  "FREE SHIPPING FOR ORDERS ABOVE $50",
  "NEW ARRIVALS DROPPING SOON",
];

export const OffersBanner = () => (
  <Flex
    w="100%"
    height="58px"
    display={{ base: "none", md: "flex" }}
    align="center"
    justify="space-between"
    px="150px"
    bg="#111"
    color="white"
  >
    {offers.map((offer, index) => (
      <Flex
        key={index}
        justify="center"
        w="100%"
        borderRight={index < offers.length - 1 ? "1px solid white" : "none"}
      >
        <Text textAlign="center">{offer}</Text>
      </Flex>
    ))}
  </Flex>
);
