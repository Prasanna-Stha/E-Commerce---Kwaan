import { useState } from "react"
import CategoryMenu from "../commonComponents/CategoryMenu"
import ProductDisplay from "../commonComponents/ProductDisplay"
import { Flex } from "@chakra-ui/react"

const PopularProductSection = ()=>{
    const [selectedCategory, setSelectedCategory]=useState("")
    return(
        <>
        <Flex w="100vw" h="fit" bg="white">
            <Flex direction={{base: "column", sm: "column", md: "column", lg: "row"}} w="80%" m="auto">
                <CategoryMenu title="Popular Products" setSelectedCategory={setSelectedCategory} />
                <ProductDisplay selectedCategory={selectedCategory} />
            </Flex>
        </Flex>
        </>
    )
}

export default PopularProductSection