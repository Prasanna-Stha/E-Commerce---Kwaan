import { useState } from "react";
import { createListCollection } from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import { Flex, Box } from "@chakra-ui/react";
import Product from "../Product";

import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";

import womenProduct1 from "../../assets/woman_wears/umbrella_yellow.png";
import womenProduct2 from "../../assets/woman_wears/women_coat_blue.png";
import womenProduct3 from "../../assets/woman_wears/women_coat_black.png";

import kidDress1 from "../../assets/kids_wears/kid_dress1.png";
import kidDress2 from "../../assets/kids_wears/kid_dress2.png";
import kidDress3 from "../../assets/kids_wears/kid_dress3.png";

const ProductDisplay = () => {
  const [sortOption, setSortOption] = useState("")

  const frameworks = createListCollection({
    items: [
      { label: "Price (high to low)", value: "priceDescOrder" },
      { label: "Price (low to high)", value: "priceAscOrder" },
      { label: "Quality", value: "quality" },
      { label: "Rating", value: "rating" },
    ],
  });

  const productsInfo = [
    { name: "ZARA Men Shirt", imgSrc: product1, price: "$52.50", productStatus: "In stock", category: "Men" },
    { name: "Men Half Pant", imgSrc: product2, price: "$80.50", productStatus: "Limited pieces", category: "Men" },
    { name: "Men Oversized Boxy Bonded Scuba Bomber Jacket", imgSrc: product3, price: "$60.50", productStatus: "In stock", category: "Men" },

    { name: "Women Coat-Blue", imgSrc: womenProduct1, price: "$67", productStatus: "New", category: "Women" },
    { name: "Women Coat-Black", imgSrc: womenProduct2, price: "$70", productStatus: "New", category: "Women" },
    { name: "Women Coat-Blue", imgSrc: womenProduct3, price: "$100", productStatus: "New", category: "Women" },

    { name: "Women Coat-Black", imgSrc: kidDress1, price: "$65", productStatus: "New", category: "Kids" },
    { name: "Women Coat-Blue", imgSrc: kidDress2, price: "$100", productStatus: "New", category: "Kids" },
    { name: "Women Coat-Black", imgSrc: kidDress3, price: "$30", productStatus: "New", category: "Kids" },
  ];

  const sortedProducts = () => {
    if (sortOption === "priceAscOrder") {
      return [...productsInfo].sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
    }
    if (sortOption === "priceDescOrder") {
      return [...productsInfo].sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
    }
    return productsInfo;
  };

  return (
    <Flex direction="column" gap={4} paddingTop={6}>
      <SelectRoot collection={frameworks} size="sm" w="fit-content" onChange={(e) => setSortOption(e.target.value)}>
        <SelectLabel>Sort by</SelectLabel>
        <SelectTrigger>
          <SelectValueText color="#111" border="none" placeholder="Sort products by" />
        </SelectTrigger>
        <SelectContent>
          {frameworks.items.map((sortOpt) => (
            <SelectItem key={sortOpt.value} item={sortOpt}>
              {sortOpt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>

      <Flex wrap="wrap" gap={4} justify="space-between">
        {sortedProducts().map((productInfo, index) => (
          <Box key={index} flexBasis={{ base: "100%", md: "48%", lg: "30%" }}>
            <Product
              name={productInfo.name}
              imgSrc={productInfo.imgSrc}
              price={productInfo.price}
              productStatus={productInfo.productStatus}
            />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default ProductDisplay;
