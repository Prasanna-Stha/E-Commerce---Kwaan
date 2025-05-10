import { Box, Text, Heading, Button, Flex, VStack, Icon } from "@chakra-ui/react";
import { useProduct } from "../../context/Context";
import CartItem from "./CartItem";
import { MdArrowOutward } from "react-icons/md";

const CartPage = () => {
    const { cartItems } = useProduct();

    return (
        <Box p={{ base: "4", md: "8" }} maxW="1200px" m="auto" bg="white" minH="100vh">
            {/* Cart Heading */}
            <Flex mb={8} gap={2} align="center" >
                <Heading
                    fontSize="28px"
                    color="gray.800"
                    fontWeight="semibold"
                    letterSpacing="tight"
                >
                    Shopping Cart
                </Heading>
                <Icon as={MdArrowOutward} boxSize="32px" />
            </Flex>

            {/* Cart Headers */}
            <Flex
                display={{ base: "none", md: "flex" }}
                justify="space-between"
                p={4}
                bg="gray.50"
                color="gray.600"
                fontSize="lg"
                fontWeight="medium"
                mb={4}
                borderBottom="1px solid"
                borderColor="gray.200"
                rounded="md"
            >
                <Text flex="2">Product</Text>
                <Text flex="1" textAlign="center">
                    Quantity
                </Text>
                <Text flex="1" textAlign="center">
                    Price
                </Text>
                <Text flex="1" textAlign="center">
                    Sub-total
                </Text>
            </Flex>

            {/* Cart Items */}
            {cartItems.length === 0 ? (
                <Text textAlign="center" fontSize="lg" color="gray.500" py="8">
                    Your cart is empty.
                </Text>
            ) : (
                <Box>
                    {/* Cart Items */}
                    <VStack spacing="4" align="stretch">
                        {cartItems.map((item, index) => (
                            <CartItem key={index} item={item} isLastItem={index === cartItems.length - 1} />
                        ))}
                    </VStack>

                    {/* Cart Summary */}
                    <Box
                        mt="8"
                        p="6"
                        rounded="lg"
                        boxShadow="md"
                        border="1px solid"
                        borderColor="gray.100"
                        bg="white"
                    >
                        <Flex justify="space-between" align="center">
                            <Text fontSize="lg" color="gray.700" fontWeight="semibold">
                                Total: $
                                {cartItems
                                    .reduce((total, item) => total + item.price * item.quantity, 0)
                                    .toFixed(2)}
                            </Text>
                            <Button
                                colorScheme="teal"
                                size="md"
                                px="8"
                                borderRadius="full"
                                fontWeight="semibold"
                                _hover={{ transform: "scale(1.02)" }}
                            >
                                Proceed to Checkout
                            </Button>
                        </Flex>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default CartPage;