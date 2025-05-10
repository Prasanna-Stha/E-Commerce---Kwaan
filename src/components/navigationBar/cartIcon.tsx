import { Box, Icon, Flex } from "@chakra-ui/react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";

interface CartIconProps {
  cartCount: number;
}

export const CartIcon = ({ cartCount }: CartIconProps) => (
  <Link to="/cartpage">
    <Box position="relative" cursor="pointer">
      <Icon as={MdOutlineShoppingBag} boxSize="24px" color="#111" />
      {cartCount > 0 && (
        <Flex
          position="absolute"
          top="-5px"
          right="-5px"
          bg="red.500"
          color="white"
          fontSize="xs"
          w="18px"
          h="18px"
          align="center"
          justify="center"
          rounded="full"
        >
          {cartCount}
        </Flex>
      )}
    </Box>
  </Link>
);
