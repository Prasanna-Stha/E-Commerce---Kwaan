import { useQuery } from "@tanstack/react-query";
import { httpClient } from "../axiosConfig";

const productList = async () => {
  const res = await httpClient.get("/products?limit=17");
  return res.data;
};

const useProductList = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: productList,
  });
};



export { useProductList };
