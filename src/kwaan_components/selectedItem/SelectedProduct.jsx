import { Flex } from "@chakra-ui/react"
import CategoryMenu from "../commonComponents/CategoryMenu"
import ItemShowcase from "./ItemShowcase"
import ProductInfo from "./ProductInfo"

const SelectedProduct = () => {
    document.title = "Kwaan | Selected products"

    return (
        <>
            <Flex direction={{ base: "column", lg: "row" }} w="80%" mx="auto" my={3} gap={1}>
                <CategoryMenu title="Products" />
                <ItemShowcase />
                <ProductInfo />
            </Flex>
        </>
    )
}

export default SelectedProduct