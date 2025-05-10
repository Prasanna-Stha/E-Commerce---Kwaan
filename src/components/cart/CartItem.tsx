import { Box, Text, Button, Flex, Image, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { useProduct } from "../../context/Context";

const CartItem = ({ item, isLastItem }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useProduct();
  const subTotal = item.price * item.quantity;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p="4"
      mb="4"
      borderBottom={isLastItem ? "none" : "1px solid"}
      borderColor="gray.100"
      transition="background-color 0.3s ease"
      _hover={{ backgroundColor: "gray.50" }}
      rounded="md"
    >
      {/* Left Section: Item Details */}
      <Flex align="center" gap="4" flex="2">
        <Box
          w="80px"
          h="80px"
          bg="gray.100"
          borderRadius="8px"
          overflow="hidden"
          flexShrink="0"
        >
          
          <Image
            src={item.image}
            alt={item.title}
            w="100%"
            h="100%"
            objectFit="contain"
            borderRadius="8px"
          />
        </Box>
        <Text color="gray.800" fontSize="md" fontWeight="medium">
          {item.title}
        </Text>
      </Flex>

      {/* Middle Section: Quantity Controls */}
      <Flex align="center" justify="center" gap="2" flex="1">
        <Button size="sm" onClick={() => decreaseQuantity(item.id)} isDisabled={item.quantity === 1} >
          -
        </Button>
        <Text fontSize="md" fontWeight="medium" minW="30px" textAlign="center">
          {item.quantity}
        </Text>
        <Button size="sm" onClick={() => increaseQuantity(item.id)}>
          +
        </Button>
      </Flex>

      {/* Right Section: Price and Sub-total */}
      <Flex align="center" flex="2" color="gray.600">
        <Text fontSize="md" textAlign="center" flex="1">
          ${item.price.toFixed(2)}
        </Text>
        <Text fontSize="md" textAlign="center" flex="1">
          ${subTotal.toFixed(2)}
        </Text>
      </Flex>

      {/* Remove Button */}
      <IconButton
        aria-label="Remove item"
        icon={<FaTrash />}
        variant="ghost"
        colorScheme="red"
        size="sm"
        onClick={() => removeFromCart(item.id)}
        _hover={{ color: "red.600" }}
      />
    </Box>
  );
};

export default CartItem;
