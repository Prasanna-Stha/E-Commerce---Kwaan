import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
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

import Product from "../commonComponents/Product";
import { useProduct } from "../../context/Context";



const ProductDisplay = ({selectedCategory}) => {
  const frameworks = createListCollection({
    items: [
      { label: "Price (high to low)", value: "priceDescOrder" },
      { label: "Price (low to high)", value: "priceAscOrder" }
    ],
  });

  const [products, setProducts] = useState([])
  const [sortOption, setSortOption] = useState("");

  const { setSelectedProduct } = useProduct();

  const categoryWiseProduct = selectedCategory ? products.filter((product) => product.category === selectedCategory) : products

  const sortedProducts = [...categoryWiseProduct].sort((a, b) => {
    switch (sortOption) {
      case "priceDescOrder":
        return b.price - a.price;
      case "priceAscOrder":
        return a.price - b.price;
      default:
        return 0;
    }
  });

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
  }, [])

  return (
    <Flex direction="column" gap={4} paddingTop={6} w="80%" mx="auto">
      <SelectRoot collection={frameworks} size="sm" w={"150px"} onChange={(e) => setSortOption(e.target.value)}>
        <SelectLabel fontSize={"16px"}>Sort by</SelectLabel>
        <SelectTrigger>
          <SelectValueText color="#111" border="none" placeholder="Sort products by" cursor="pointer" />
        </SelectTrigger>
        <SelectContent>
          {frameworks.items.map((sortOpt) => (
            <SelectItem key={sortOpt.value} item={sortOpt} cursor="pointer" >
              {sortOpt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>

      <Flex wrap="wrap" gap={4} justify="space-between">
        {sortedProducts.map((product) => (
              <Box key={product.id} flexBasis={{ base: "100%", md: "48%", lg: "30%" }}>
                <Link to={`/${product.title}/${product.id}`} onClick={() => setSelectedProduct(product)}>
                  <Product
                    name={product.title}
                    imgSrc={product.image}
                    price={product.price}
                    addToCart={true}
                    productStatus="New"
                    titleLength={20}
                    rating={product.rating}
                  />
                </Link>
              </Box>
            ))
          }
      </Flex>
    </Flex>
  );
};

export default ProductDisplay;
