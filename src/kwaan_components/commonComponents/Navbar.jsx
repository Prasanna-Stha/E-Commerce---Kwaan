import { Flex, Box, Text, Heading, Button, Icon, Input, Image } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";
import { RiCloseCircleFill } from "react-icons/ri";
import { useProduct } from "@/context/Context";

const Navbar = () => {
    const searchRef = useRef(null);
    const location = useLocation();
    const { cartCount } = useProduct();
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleMobileNav = () => setIsMobileNavOpen(prevState => !prevState);

    const { setSelectedProduct } = useProduct();

    const handleSearch = async (e) => {
        const query = e.target.value;
        setSearchTerm(query);
        try {
            const response = await fetch(`https://fakestoreapi.com/products`);
            const products = await response.json();

            const filteredProducts = products.filter(product =>
                product.title.toLowerCase().includes(query.toLowerCase())
            );

            setSearchResults(filteredProducts);
        } catch (error) {
            console.error("Error fetching search results:", error);
            setSearchResults([]);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearchOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const offers = ["GET 20% OFF ON FIRST MEMBERSHIP", "FREE SHIPPING FOR ORDERS ABOVE $50", "NEW ARRIVALS DROPPING SOON"];

    const navLinks = [
        { path: "/", label: "HOME" },
        { path: "/new_arrival", label: "NEW ARRIVALS" },
        { path: "/popular_products", label: "POPULAR PRODUCT" },
        { path: "/help_support", label: "HELP & SUPPORT" }
    ];

    if (location.pathname.includes("/login")) return null;
    if (location.pathname.includes("/signup")) return null;

    return (
        <>
            {/* Offers Section (Desktop) */}
            <Flex w="100vw" overflowX="hidden" height="58px" display={["none", "none", "flex"]} align="center" justify="space-between" px="150px" bg="#111" color="white">
                {offers.map((offer, index) => (
                    <Flex key={index} direction="column" justify="center" w="100%" h="100%" borderRight={index < offers.length - 1 ? "1px solid white" : "none"}>
                        <Text textAlign="center">{offer}</Text>
                    </Flex>
                ))}
            </Flex>

            {/* Main Navbar */}
            <Flex align="center" overflowX="hidden" w="100vw" h="58px" bg="white" position="sticky" top="0" zIndex="10" boxShadow="0px 4px 12px rgba(0, 0, 0, 0.08)">
                <Flex w="80%" color="#111111" justify="space-between" align="center" m="auto">
                    <Box>
                        <Link to="/">
                            <Heading fontSize="28px" fontWeight="700">KWAAN.</Heading>
                        </Link>
                    </Box>

                    {/* Desktop Nav Links */}
                    <Flex w="50%" display={{ base: "none", lg: "flex" }} justify="space-between">
                        {navLinks.map((link, index) => (
                            <Box key={index}>
                                <NavLink to={link.path}>
                                    {({ isActive }) => (
                                        <Text fontWeight={isActive ? "bold" : "normal"} color="black">{link.label}</Text>
                                    )}
                                </NavLink>
                            </Box>
                        ))}
                    </Flex>

                    {/* Icons & login/signup btn */}
                    <Flex w="fit-content" display={["flex"]} justify="space-between" align="center" gap="32px">
                        <Flex gap="16px" align="center">
                            <Flex position="relative" align="center">
                                {/* Search Bar Toggle */}
                                <Flex position="relative" align="center" ref={searchRef}>
                                    {/* Search Bar */}
                                    {isSearchOpen && (
                                        <Input
                                            placeholder="Search products"
                                            value={searchTerm}
                                            onChange={handleSearch}
                                            width="200px"
                                            size="sm"
                                        />
                                    )}

                                    {/* Search Icon */}
                                    <Icon
                                        as={IoMdSearch}
                                        boxSize="22px"
                                        ml="2"
                                        cursor="pointer"
                                        onClick={() => setIsSearchOpen(true)}
                                    />
                                </Flex>
                            </Flex>
                            <Icon as={FaRegHeart} boxSize="18px" cursor="pointer" />
                            <Link to="/cartpage">
                                <Box position="relative" cursor="pointer">
                                    <Icon as={MdOutlineShoppingBag} boxSize="24px" />
                                    {cartCount > 0 && (
                                        <Flex position="absolute" top="-5px" right="-5px" bg="red.500" color="white" fontSize="xs" w="18px" h="18px" align="center" justify="center" rounded="full" >
                                            {cartCount}
                                        </Flex>
                                    )}
                                </Box>
                            </Link>
                        </Flex>
                    </Flex>

                    <Flex border="1px solid grey" p="4px" rounded="md" gap="8px" display={["none", "none", "none", "flex"]}>
                        <Link to="/login">
                            <Button bg="black" color="white">LOG IN</Button>
                        </Link>
                        <Link to="/signup">
                            <Button bg="white" color="black">SIGN UP</Button>
                        </Link>
                    </Flex>

                    <Flex direction="column" display={["flex", "flex", "flex", "none"]} gap="4px" onClick={toggleMobileNav} cursor="pointer">
                        <Box w="24px" h="4px" bg="black" rounded="16px"></Box>
                        <Box w="24px" h="4px" bg="black" rounded="16px"></Box>
                        <Box w="24px" h="4px" bg="black" rounded="16px"></Box>
                    </Flex>
                </Flex>
            </Flex>

            {/* Search Results */}
            {searchResults.length > 0 && (
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
                        {searchResults.map((product) => (
                            <Link key={product.id} to={`/${product.title}/${product.id}`} onClick={
                                () => {
                                    setSelectedProduct(product)
                                    setSearchResults([])
                                }
                            }>
                                <Flex gap={4} mb={3}>
                                    <Image src={product.image} h="40px" /> {/* Smaller image */}
                                    <Text fontWeight="semibold" fontSize="sm" color="gray.800">{product.title}</Text> {/* Smaller text */}
                                </Flex>
                            </Link>
                        ))}
                    </Flex>
                </Box>
            )}

            {/* Mobile Navigation */}
            {isMobileNavOpen && (
                <Flex className="vertical-nav" direction="column" bg="white" position="fixed" top="0" left="0" w="250px" h="100vh" zIndex="20" p="4" boxShadow="md" transition="transform 0.8s ease-in-out" transform={isMobileNavOpen ? "translateX(0)" : "translateX(-100%)"}>
                    <Flex justify="flex-end" mb="16px" w="100%">
                        <Box as="button" onClick={toggleMobileNav}>
                            <Icon as={RiCloseCircleFill} boxSize="30px" />
                        </Box>
                    </Flex>

                    <Flex direction="column" p="4">
                        {navLinks.map((link, index) => (
                            <Box key={index} mb="20px">
                                <NavLink to={link.path} onClick={toggleMobileNav}>
                                    {({ isActive }) => (
                                        <Text fontWeight={isActive ? "bold" : "normal"} color="black">{link.label}</Text>
                                    )}
                                </NavLink>
                            </Box>
                        ))}
                    </Flex>
                    <Box mt="auto">
                        <Link to="/login" onClick={toggleMobileNav}>
                            <Button bg="black" color="white" width="full">LOG IN</Button>
                        </Link>
                        <Link to="/signup" onClick={toggleMobileNav}>
                            <Button bg="white" color="black" width="full" mt="4">SIGN UP</Button>
                        </Link>
                    </Box>
                </Flex>
            )}
        </>
    );
};

export default Navbar;
