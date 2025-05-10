import { Flex, Box, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { OffersBanner } from "@/components/navigationBar/banner";
import { SearchBar } from "@/components/navigationBar/searchBar";
import { SearchResult } from "@/components/navigationBar/searchResult";
import { useProduct } from "../../context/Context";
import { CartIcon } from "@/components/navigationBar/cartIcon";
import { AuthButtons } from "@/components/navigationBar/authButtons";
import { NavElem } from "../navigationBar/NavElem";

const Navbar = () => {
  const { cartCount, setSelectedProduct } = useProduct();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  if (location.pathname.includes("/login") || location.pathname.includes("/signup")) return null;

  return (
    <>
      <OffersBanner />

      <Flex as="nav" position="sticky" top="0" zIndex="10" bg="white" boxShadow="sm">
        <Flex w="80%" m="auto" justify="space-between" align="center" h="58px">
          <Box>
            <Heading fontSize="28px" fontWeight="700" color="#111">KWAAN.</Heading>
          </Box>

          <NavElem />
          
          <Flex align="center" gap="4">
            <SearchBar onSearch={setSearchResults} />
            <CartIcon cartCount={cartCount} />
          </Flex>

          <AuthButtons />

          <Box onClick={() => setMobileOpen(!mobileOpen)}>☰</Box>
        </Flex>
      </Flex>

      <SearchResult
        results={searchResults}
        setSelectedProduct={setSelectedProduct}
        clearResults={() => setSearchResults([])}
      />
    </>
  );
};

export default Navbar;
