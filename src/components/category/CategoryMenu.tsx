import { Stack, Heading, Text, Flex } from "@chakra-ui/react";
import { useCategoryMenu } from "@/services/category";
import { FC } from "react";
import { CategoryMenuProps } from "@/@types/categories/category";

const CategoryMenu: FC<CategoryMenuProps> = ({ title, setSelectedCategory }) => {
  const { data: response, isLoading, isError, error } = useCategoryMenu();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error?.message}</p>;

  const categories: string[] = response ?? [];

  const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Stack p={6} gap={4} w={{ base: "100%", lg: "25%" }} h="fit" position={"sticky"} top={20}>
      <Heading color="black" mb={4} fontWeight="700" fontSize="24px">
        {title}
      </Heading>
      {categories.map((category) => (
        <Flex
          key={category}
          px={3}
          py={1}
          borderRadius="8px"
          bg="transparent"
          color="black"
          cursor="pointer"
          _hover={{ bg: "gray.100" }}
        >
          <Text fontWeight="bold" onClick={() => setSelectedCategory(category)}>
            {capitalizeFirstLetter(category)}
          </Text>
        </Flex>
      ))}
    </Stack>
  );
};

export default CategoryMenu;
