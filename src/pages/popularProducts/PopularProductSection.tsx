import { useState } from "react"
import ProductDisplay from "@/components/shared/ProductDisplay"
import { Flex } from "@chakra-ui/react"
import CategoryMenu from "@/components/category/CategoryMenu"

const PopularProductSection = ()=>{
    const [selectedCategory, setSelectedCategory]=useState("")
    return(
        <>
        <Flex w="100%" h="fit" bg="white">
            <Flex direction={{base: "column", sm: "column", md: "column", lg: "row"}} w="80%" m="auto">
                <CategoryMenu title="Popular Products" setSelectedCategory={setSelectedCategory} />
                <ProductDisplay selectedCategory={selectedCategory} />
            </Flex>
        </Flex>
        </>
    )
}

export default PopularProductSection