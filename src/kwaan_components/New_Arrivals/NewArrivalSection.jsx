import CategoryMenu from "./CategoryMenu"
import ProductDisplay from "./ProductDisplay"
import { Flex } from "@chakra-ui/react"

const NewArrivalSection = ()=>{
    return(
        <>
        <Flex w="100vw" h="fit" bg="white">
            <Flex direction={{base: "column", sm: "column", md: "column", lg: "row"}} w="80%" m="auto">
                <CategoryMenu />
                <ProductDisplay />
            </Flex>
        </Flex>
        </>
    )
}

export default NewArrivalSection