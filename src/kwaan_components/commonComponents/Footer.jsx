import { Box, Flex, Text, Link as ChakraLink, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";


const Footer = () => {
    const socialLinks = [
        { icon: FaFacebookF, href: "#", label: "Facebook" },
        { icon: FaInstagram, href: "#", label: "Instagram" },
        { icon: FaTwitter, href: "#", label: "Twitter" },
        { icon: FaLinkedin, href: "#", label: "LinkedIn" },
        { icon: FaYoutube, href: "#", label: "YouTube" }
    ];

    const navLinks = [
        { label: "Home", to: "/" },
        { label: "New Arrivals", to: "/new_arrival" },
        { label: "Popular Products", to: "/popular_products" },
        { label: "Help & Support", to: "/help_support" }
    ];
    return (
        <Box w="100%" bg="black" color="white" mt={10} py={20}>
            {/* Top Section */}
            <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" maxW="1200px" mx="auto" px={{ base: 4, md: 8 }} gap={6}>
                <Text fontSize="2xl" fontWeight="semibold" mb={{ base: 4, md: 0 }}>KWAAN.</Text>

                {/* Navigation Links */}
                <Flex direction={{ base: "column", md: "row" }} align="center" gap={5} fontSize="sm" textAlign="center">
                    {navLinks.map(({ label, to }, index) => (
                        <Link key={index} to={to} color="white" fontSize="md" _hover={{ color: "teal.300" }}>
                            {label}
                        </Link>
                    ))}
                </Flex>

                {/* Social Media Icons */}
                <Flex gap={8}>
                    {socialLinks.map(({ icon, href, label }, index) => (
                        <Link key={index} to={href} target="_blank" aria-label={label}>
                            <Icon as={icon} boxSize={5} color="white" _hover={{ color: "teal.300" }} />
                        </Link>
                    ))}
                </Flex>
            </Flex>

            {/* Bottom Section */}
            <Flex direction="column" align="center" justify="center" fontSize="xs" color="white" mt={6} gap={2} px={{ base: 4, md: 8 }}>
                <Text>2024 Kwaan. All rights reserved.</Text>
                <Flex gap={4} mt={2}>
                    {["Privacy Policy", "Terms of Service", "Cookies Settings"].map((link, index) => (
                        <Link key={index} to="#" color="white">{link}</Link>
                    ))}
                </Flex>
            </Flex>
        </Box>
    );
};

export default Footer;
