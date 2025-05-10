import { Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const AuthButtons = () => (
  <Flex
    border="1px solid grey"
    p="4px"
    rounded="md"
    gap="8px"
    display={["none", "none", "none", "flex"]}
  >
    <Link to="/login">
      <Button bg="black" color="white" size="sm">
        LOG IN
      </Button>
    </Link>
    <Link to="/signup">
      <Button bg="white" color="black" size="sm">
        SIGN UP
      </Button>
    </Link>
  </Flex>
);
