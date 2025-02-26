import { useState } from "react"
import CategoryMenu from "../commonComponents/CategoryMenu"
import ProductDisplay from "../commonComponents/ProductDisplay"
import { Flex } from "@chakra-ui/react"

const NewArrivalSection = ()=>{

    const [selectedCategory, setSelectedCategory]=useState("")
    return(
        <>
        <Flex w="100vw" h="fit" bg="white">
            <Flex direction={{base: "column", lg: "row"}} w="80%" m="auto">
                <CategoryMenu title="New Arrivals" setSelectedCategory={setSelectedCategory} />
                <ProductDisplay selectedCategory={selectedCategory} />
            </Flex>
        </Flex>
        </>
    )
}

export default NewArrivalSection