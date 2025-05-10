import { createListCollection, Select } from "@chakra-ui/react";

const SortProduct = () => {
  const frameworks = createListCollection({
    items: [
      { label: "Price (high to low)", value: "priceDescOrder" },
      { label: "Price (low to high)", value: "priceAscOrder" },
    ],
  });
  return (
    <div>
      <Select.Root
        collection={frameworks}
        size="sm"
        w={"150px"}
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
    </div>
  );
};

export default SortProduct;
