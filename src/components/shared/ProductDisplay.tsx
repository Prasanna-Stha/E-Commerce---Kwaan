import { Link } from "react-router-dom";
import { useState } from "react";
import {
  createListCollection,
  Portal,
  Flex,
  Box,
  Select,
} from "@chakra-ui/react";

import Product from "./Product";
import {
  ProductDisplayProps,
  ProductType,
} from "@/@types/products/productDisplay";
import { useProductList } from "@/services/product";
import { useProduct } from "@/context/Context";

const ProductDisplay: React.FC<ProductDisplayProps> = ({
  selectedCategory,
}) => {
  const frameworks = createListCollection({
    items: [
      { label: "Price (high to low)", value: "priceDescOrder" },
      { label: "Price (low to high)", value: "priceAscOrder" },
    ],
  });

  const { data: response } = useProductList();
  const products:ProductType = response ?? [];

  const [sortOption, setSortOption] = useState<string>("");

  const { setSelectedProduct } = useProduct();

  const categoryWiseProduct = selectedCategory
    ? products.filter((product:ProductType) => product.category === selectedCategory)
    : products;

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

  return (
    <Flex direction="column" gap={4} paddingTop={6} w="80%" mx="auto">
      <Select.Root
        collection={frameworks}
        size="sm"
        w={"150px"}
        onChange={(e: any) => setSortOption(e.target.value)}
      >
        <Select.HiddenSelect />
        <Select.Label>Sort by</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText
              color="#111"
              border="none"
              placeholder="Sort products by"
              cursor="pointer"
            />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {frameworks.items.map((sortOpt) => (
                <Select.Item
                  key={sortOpt.value}
                  item={sortOpt}
                  cursor="pointer"
                >
                  {sortOpt.label}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>

      <Flex wrap="wrap" gap={4} justify="space-between">
        {sortedProducts.map((product) => (
          <Box
            key={product.id}
            flexBasis={{ base: "100%", md: "48%", lg: "30%" }}
          >
            <Link
              to={`/product/${product.id}`}
              onClick={() => setSelectedProduct(product)}
            >
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
        ))}
      </Flex>
    </Flex>
  );
};

export default ProductDisplay;
