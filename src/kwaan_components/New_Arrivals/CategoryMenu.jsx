import { useState } from "react";
import { Stack, Icon, Flex, Heading, AccordionRoot, AccordionItem, AccordionItemContent, AccordionItemTrigger } from "@chakra-ui/react";
import { MdArrowOutward, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"; 

const CategoryMenu = () => {
    const [openItem, setOpenItem] = useState(null)

    const items = [
        { value: "a", title: "All", text: ["Tops & T-shirts", "Shorts", "Hoodies & Pullovers", "Jackets & Vests", "Accessories & Equipment", "Shoes"] },
        { value: "b", title: "Men", text: ["Hoodies & Pullovers", "Jackets & Vests", "Shoes"] },
        { value: "c", title: "Women", text: ["Tops & T-shirts", "Shorts", "Saree"] },
        { value: "d", title: "Kids", text: ["Shirt", "Half pant", "Shoe", "Socks"] },
    ];

    return (
        <Stack p={6} gap={4} w="100%">
            <Heading color="black" mb={4} fontWeight="700" fontSize={"20px"}>New Arrivals <Icon as={MdArrowOutward} boxSize="20px" /></Heading>
            <AccordionRoot collapsible w="100%">
                {items.map((item, index) => (
                    <AccordionItem key={index} value={item.value} bg="transparent" border="none">
                        <Flex direction="column" gap={2} paddingLeft={4}>
                            <AccordionItemTrigger
                                fontWeight="700"
                                cursor="pointer"
                                onClick={() => setOpenItem(openItem === item.value ? null : item.value)}
                                bg={openItem === item.value ? "black" : "transparent"} 
                                color={openItem === item.value ? "white" : "#111"}
                                borderRadius="8px"
                                p="8px 16px"
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                                transition="background-color 0.3s ease"
                                _hover={{
                                    bg: openItem === item.value ? "black" : "gray.100",
                                    color: openItem === item.value ? "white" : "black",
                                }}
                            >
                                {item.title}
                                <Icon
                                    as={openItem === item.value ? MdKeyboardArrowUp : MdKeyboardArrowDown} 
                                    ml={2} 
                                    color={openItem === item.value ? "white" : "#111"} 
                                />
                            </AccordionItemTrigger>
                            {openItem === item.value && item.text.map((subItem, index) => (
                                <AccordionItemContent key={index} marginLeft={3} cursor="pointer" color="#111" p="4px 0">
                                    {subItem}
                                </AccordionItemContent>
                            ))}
                        </Flex>
                    </AccordionItem>
                ))}
            </AccordionRoot>
        </Stack>
    );
};

export default CategoryMenu;
