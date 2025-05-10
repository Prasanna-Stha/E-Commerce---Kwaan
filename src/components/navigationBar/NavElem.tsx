import { Flex, Box, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/new_arrival", label: "NEW ARRIVALS" },
    { path: "/popular_products", label: "POPULAR PRODUCT" },
    { path: "/help_support", label: "HELP & SUPPORT" }
  ];

export const NavElem = () => (
  <Flex gap={8} align="center" display={["none", "none", "flex"]}>
    {navLinks.map((link) => (
      <NavLink key={link.path} to={link.path}>
        {({ isActive }) => (
          <Box
            fontWeight="medium"
            color={isActive ? "#490057" : "gray.600"}
            _hover={{ color: "#490057" }}
          >
            <Text fontSize="sm">{link.label}</Text>
          </Box>
        )}
      </NavLink>
    ))}
  </Flex>
);
